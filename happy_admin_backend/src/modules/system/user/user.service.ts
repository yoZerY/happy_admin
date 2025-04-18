import * as bcrypt from 'bcryptjs'
import { Inject, Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { CustomPrismaService, PrismaService } from 'nestjs-prisma'
import { type ExtendedPrismaClient } from '../../../shared/prisma/prisma.extension'
import { CUSTOMPRISMASERVICE } from '../../../common/contants'
import { ApiException } from '../../../common/exceptions/api.exception'
import { UploadService } from '../../../shared/upload/upload.service'

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly uploadService: UploadService,
    @Inject(CUSTOMPRISMASERVICE)
    private prismaService: CustomPrismaService<ExtendedPrismaClient>
  ) {}

  async list() {
    const [list, meta] = await this.prismaService.client.user
      .paginate({
        orderBy: [
          {
            updateTime: 'desc'
          }
        ],
        include: {
          dept: true,
          roles: true
        }
      })
      .withPages({
        limit: 10,
        page: 1,
        includePageCount: true
      })
    return {
      list,
      ...meta
    }
  }

  async create(info: CreateUserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        username: info.username
      }
    })
    if (user) throw new ApiException(`User already exists`)
    // 加密密码
    const salt = await bcrypt.genSalt(10)
    const saltPwd = await bcrypt.hash(info.password, salt)

    const { roles, ...args } = info
    return await this.prisma.user.create({
      data: {
        ...args,
        password: saltPwd,
        roles: {
          connect: roles.map((role) => ({ id: role }))
        }
      }
    })
  }

  async delete(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } })
    if (!user) throw new ApiException(`User with id ${id} not found`)
    return await this.prisma.user.delete({
      where: { id }
    })
  }

  findAll() {
    return `This action returns all user`
  }

  async findOne(id: number) {
    const userInfo = await this.prisma.user.findUnique({
      where: {
        id
      },
      include: {
        dept: true,
        roles: true
      }
    })
    return userInfo
  }

  async uploadAvatar(file: Express.Multer.File, id: number) {
    const avatar = await this.uploadService.uploadFile(file)
    if (avatar) {
      await this.prisma.user.update({
        where: { id },
        data: {
          avatar
        }
      })
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
