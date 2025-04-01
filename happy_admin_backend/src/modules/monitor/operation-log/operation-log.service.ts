import { Injectable } from '@nestjs/common'
import { UpdateOperationLogDto } from './dto/update-operation-log.dto'

@Injectable()
export class OperationLogService {
  list() {
    const list = [
      {
        id: 1,
        username: 'admin',
        ip: '333',
        address: '中国河南省信阳市',
        system: 'macOS',
        browser: 'Chrome',
        status: 1, // 操作状态 1 成功 0 失败
        summary: '菜单管理-添加菜单', // 操作概要
        module: '系统管理', // 所属模块
        operatingTime: new Date() // 操作时间
      },
      {
        id: 2,
        username: 'common',
        ip: '33',
        address: '中国广东省深圳市',
        system: 'Windows',
        browser: 'Firefox',
        status: 0,
        summary: '列表分页查询',
        module: '在线用户',
        operatingTime: new Date()
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
    return `This action returns all operationLog`
  }

  findOne(id: number) {
    return `This action returns a #${id} operationLog`
  }

  update(id: number, updateOperationLogDto: UpdateOperationLogDto) {
    return `This action updates a #${id} operationLog`
  }

  remove(id: number) {
    return `This action removes a #${id} operationLog`
  }
}
