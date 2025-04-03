import { Injectable } from '@nestjs/common'
import { CreateMenuDto } from './dto/create-menu.dto'
import { PrismaService } from 'nestjs-prisma'

@Injectable()
export class MenuService {
  constructor(private readonly prisma: PrismaService) {}

  async roleMenu() {
    const res = await this.prisma.menu.findMany()
    return res
  }

  async roleMenuIds(id: number) {
    const res = await this.prisma.role.findUnique({
      where: {
        id
      },
      include: {
        menus: true
      }
    })
    const menuids = res!.menus.map((item) => item.id)
    return menuids
  }

  async create(menu: CreateMenuDto) {
    return await this.prisma.menu.create({
      data: {
        ...menu,
        parentId: menu.parentId || null
      }
    })
  }

  async update(menu) {
    return await this.prisma.menu.update({
      where: {
        id: menu.id
      },
      data: { ...menu, parentId: menu.parentId || null }
    })
  }

  async list() {
    return await this.prisma.menu.findMany()
  }

  findAll() {
    return `This action returns all menu`
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`
  }

  remove(id: number) {
    return `This action removes a #${id} menu`
  }
}
