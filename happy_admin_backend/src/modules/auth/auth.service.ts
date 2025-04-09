import { Injectable } from '@nestjs/common'
import { LoginDto } from './dto/login.dto'
import { PrismaService } from 'nestjs-prisma'
import { handleTree } from '../../utils'
import { ApiException } from '../../common/exceptions/api.exception'
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async genToken(payload) {
    return await this.jwtService.signAsync(payload)
  }

  async signIn(user: LoginDto) {
    const existUser = await this.prisma.user.findUnique({
      where: { username: user.username },
      include: {
        dept: true,
        roles: true
      }
    })
    if (!existUser) throw new ApiException('用户名密码错误')
    const isMatch = await bcrypt.compare(user.password, existUser.password)
    if (!isMatch) throw new ApiException('用户名密码错误')
    const accessToken = await this.genToken({
      ...existUser,
      sub: existUser.id
    })
    const roles = existUser.roles.map((role) => role.code)
    let permissions: string[] = []
    if (roles.includes('admin')) {
      permissions = ['*:*:*']
    }
    return {
      ...existUser,
      permissions,
      roles,
      accessToken,
      refreshToken: accessToken,
      expires: '2030/10/30 00:00:00'
    }
    // return existUser
    // if (user.username === 'admin') {
    //   return {
    //     avatar: 'https://avatars.githubusercontent.com/u/44761321',
    //     username: 'admin',
    //     nickname: '小铭',
    //     // 一个用户可能有多个角色
    //     roles: ['admin'],
    //     // 按钮级别权限
    //     permissions: ['*:*:*'],
    //     accessToken: 'eyJhbGciOiJIUzUxMiJ9.admin',
    //     refreshToken: 'eyJhbGciOiJIUzUxMiJ9.adminRefresh',
    //     expires: '2030/10/30 00:00:00'
    //   }
    // } else {
    //   return {
    //     avatar: 'https://avatars.githubusercontent.com/u/52823142',
    //     username: 'common',
    //     nickname: '小林',
    //     roles: ['common'],
    //     permissions: ['permission:btn:add', 'permission:btn:edit'],
    //     accessToken: 'eyJhbGciOiJIUzUxMiJ9.common',
    //     refreshToken: 'eyJhbGciOiJIUzUxMiJ9.commonRefresh',
    //     expires: '2030/10/30 00:00:00'
    //   }
    // }
  }

  async getAsyncRoutes() {
    const menus = await this.prisma.menu.findMany({
      where: {
        menuType: {
          not: 3 //菜单类型（`0`代表菜单、`1`代表`iframe`、`2`代表外链、`3`代表按钮）
        }
      },
      include: {
        roles: true
      }
    })
    const list = handleTree(menus)

    return {
      list: list
    }
  }

  mine() {
    return {
      avatar: 'https://avatars.githubusercontent.com/u/44761321',
      username: 'admin',
      nickname: '小铭',
      email: 'pureadmin@163.com',
      phone: '15888886789',
      description: '一个热爱开源的前端工程师'
    }
  }

  mineLogs() {
    const list = [
      {
        id: 1,
        ip: '1.2.3.3.55',
        address: '中国河南省信阳市',
        system: 'macOS',
        browser: 'Chrome',
        summary: '账户登录', // 详情
        operatingTime: new Date() // 时间
      },
      {
        id: 2,
        ip: '1.2.3.3.55',
        address: '中国广东省深圳市',
        system: 'Windows',
        browser: 'Firefox',
        summary: '绑定了手机号码',
        operatingTime: new Date().setDate(new Date().getDate() - 1)
      }
    ]
    return {
      list,
      total: list.length, // 总条目数
      pageSize: 10, // 每页显示条目个数
      currentPage: 1 // 当前页数
    }
  }

  refreshToken() {
    return {
      accessToken: 'eyJhbGciOiJIUzUxMiJ9.newAdmin',
      refreshToken: 'eyJhbGciOiJIUzUxMiJ9.newAdminRefresh',
      // `expires`选择这种日期格式是为了方便调试，后端直接设置时间戳或许更方便（每次都应该递增）。如果后端返回的是时间戳格式，前端开发请来到这个目录`src/utils/auth.ts`，把第`38`行的代码换成expires = data.expires即可。
      expires: '2030/10/30 23:59:59'
    }
  }
}
