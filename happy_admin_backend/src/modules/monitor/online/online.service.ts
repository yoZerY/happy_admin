import { Injectable } from '@nestjs/common'

@Injectable()
export class OnlineService {
  list() {
    const list = [
      {
        id: 1,
        username: 'admin',
        ip: '1111',
        address: '中国河南省信阳市',
        system: 'macOS',
        browser: 'Chrome',
        loginTime: new Date()
      },
      {
        id: 2,
        username: 'common',
        ip: '222',
        address: '中国广东省深圳市',
        system: 'Windows',
        browser: 'Firefox',
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
}
