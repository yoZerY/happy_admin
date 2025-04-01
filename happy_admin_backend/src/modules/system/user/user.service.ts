import { Inject, Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { CustomPrismaService, PrismaService } from 'nestjs-prisma'
import { type ExtendedPrismaClient } from '../../../shared/prisma/prisma.extension'
import { CUSTOMPRISMASERVICE } from '../../../common/contants'

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(CUSTOMPRISMASERVICE)
    private prismaService: CustomPrismaService<ExtendedPrismaClient>
  ) {}

  async list() {
    const [list, meta] = await this.prismaService.client.user
      .paginate({
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
    const { roles, ...args } = info
    return await this.prisma.user.create({
      data: {
        ...args,
        roles: {
          connect: roles.map((role) => ({ id: role }))
        }
      }
    })
  }

  findAll() {
    return `This action returns all user`
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
