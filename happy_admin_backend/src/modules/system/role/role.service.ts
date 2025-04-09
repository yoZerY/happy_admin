import { Inject, Injectable } from '@nestjs/common'
import { CreateRoleDto } from './dto/create-role.dto'
import { CustomPrismaService, PrismaService } from 'nestjs-prisma'
import { CUSTOMPRISMASERVICE } from '../../../common/contants'
import type { ExtendedPrismaClient } from '../../../shared/prisma/prisma.extension'
import { ApiException } from '../../../common/exceptions/api.exception'
import { UpdateRoleDto } from './dto/update-role.dto'

@Injectable()
export class RoleService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(CUSTOMPRISMASERVICE)
    private customPrisma: CustomPrismaService<ExtendedPrismaClient>
  ) {}

  async list(body) {
    const {
      name = '',
      code = '',
      status = '',
      currentPage = 1,
      pageSize = 20
    } = body
    const [list, paginateInfo] = await this.customPrisma.client.role
      .paginate({
        where: {
          name: {
            contains: name
          },
          code: {
            contains: code
          },
          ...(typeof status === 'number' ? { status } : {})
        },
        orderBy: {
          updateTime: 'desc'
        }
      })
      .withPages({
        limit: pageSize,
        page: currentPage,
        includePageCount: true
      })
    return {
      list,
      ...paginateInfo
    }
  }

  async create(data: CreateRoleDto) {
    const { code } = data
    const existRole = await this.prisma.role.findUnique({
      where: {
        code
      }
    })
    if (existRole) throw new ApiException('Role already exists')
    return await this.prisma.role.create({
      data
    })
  }

  async delete(ids: number[]) {
    return await this.prisma.role.deleteMany({
      where: {
        id: {
          in: ids
        }
      }
    })
  }

  async update(info: UpdateRoleDto) {
    return await this.prisma.role.update({
      where: {
        id: info.id
      },
      data: info
    })
  }

  async findAll() {
    const list = await this.prisma.role.findMany({
      where: {
        status: 1
      }
    })
    return {
      list
    }
  }

  async userRoleIds(id: number) {
    const list = await this.prisma.user.findMany({
      where: {
        id
      },
      include: {
        roles: true
      }
    })
    return list
  }

  async setRoleMenus(body: { id: number; ids: number[] }) {
    const { id, ids } = body
    await this.prisma.role.update({
      where: { id: id },
      data: {
        menus: {
          set: []
        }
      }
    })

    return await this.prisma.role.update({
      where: { id: id },
      data: {
        menus: {
          connect: ids.map((id) => ({ id }))
        }
      }
    })
  }
}
