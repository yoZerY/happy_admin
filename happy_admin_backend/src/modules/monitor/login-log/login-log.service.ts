import { Injectable } from '@nestjs/common'
import { CreateLoginLogDto } from './dto/create-login-log.dto'
import { UpdateLoginLogDto } from './dto/update-login-log.dto'

@Injectable()
export class LoginLogService {
  list(createLoginLogDto: CreateLoginLogDto) {
    const list = [
      {
        id: 1,
        username: 'admin',
        ip: '1',
        address: '中国河南省信阳市',
        system: 'macOS',
        browser: 'Chrome',
        status: 1, // 登录状态 1 成功 0 失败
        behavior: '账号登录',
        loginTime: new Date()
      },
      {
        id: 2,
        username: 'common',
        ip: '1',
        address: '中国广东省深圳市',
        system: 'Windows',
        browser: 'Firefox',
        status: 0,
        behavior: '第三方登录',
        loginTime: new Date()
      }
    ]

    return {
      list,
      total: list.length, // 总条目数
      pageSize: 10, // 每页显示条目个数
      currentPage: 1 // 当前页数
    }
  }

  findAll() {
    return `This action returns all loginLog`
  }

  findOne(id: number) {
    return `This action returns a #${id} loginLog`
  }

  update(id: number, updateLoginLogDto: UpdateLoginLogDto) {
    return `This action updates a #${id} loginLog`
  }

  remove(id: number) {
    return `This action removes a #${id} loginLog`
  }
}
