import { Inject, Injectable } from '@nestjs/common'
import { CreateDeptDto } from './dto/create-dept.dto'
import { UpdateDeptDto } from './dto/update-dept.dto'
import { CustomPrismaService, PrismaService } from 'nestjs-prisma'
import { CUSTOMPRISMASERVICE } from '../../../common/contants'
import type { ExtendedPrismaClient } from '../../../shared/prisma/prisma.extension'

@Injectable()
export class DeptService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(CUSTOMPRISMASERVICE)
    private customPrisma: CustomPrismaService<ExtendedPrismaClient>
  ) {}

  async list(info) {
    const { name = '', status } = info
    const list = await this.prisma.dept.findMany({
      where: {
        name: {
          contains: name
        },
        ...(typeof status === 'number' ? { status } : {})
      }
    })
    return {
      list
    }
  }

  async create(data: CreateDeptDto) {
    return await this.prisma.dept.create({
      data
    })
  }

  async findAll() {
    const list = await this.prisma.dept.findMany()
    return {
      list
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} dept`
  }

  update(id: number, updateDeptDto: UpdateDeptDto) {
    return `This action updates a #${id} dept`
  }

  remove(id: number) {
    return `This action removes a #${id} dept`
  }
}
