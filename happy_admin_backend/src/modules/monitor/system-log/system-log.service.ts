import { Injectable } from '@nestjs/common'
import { UpdateSystemLogDto } from './dto/update-system-log.dto'

@Injectable()
export class SystemLogService {
  list() {
    const list = [
      {
        id: 1, // 日志ID
        /**
         * 日志级别
         * 0 debug调试（最低级别的日志，用于调试和开发阶段）
         * 1 info信息（默认级别，用于记录一般的信息）
         * 2 warn警告（表示可能出现的问题或潜在的错误，但不会影响系统的正常运行）
         * 3 error错误（表示发生了错误，但不会导致系统崩溃）
         * 4 fatal致命（最高级别的日志，表示发生了严重错误，导致系统无法继续运行）
         */
        level: 1,
        module: '菜单管理', // 所属模块
        url: '/menu', // 请求接口
        method: 'post', // 请求方法
        ip: '1',
        address: '中国河南省信阳市',
        system: 'macOS',
        browser: 'Chrome',
        /**
         * 请求耗时（单位：ms 毫秒）
         * 正常耗时：一般认为在几百毫秒（0.1-0.5秒）范围内的请求耗时较为正常
         * 较慢耗时：在1秒以上的耗时可以被认为是较慢的请求，但具体是否较慢还需要根据具体业务场景和性能要求来判断
         */
        takesTime: 10,
        requestTime: new Date() // 请求时间
      },
      {
        id: 2,
        level: 0,
        module: '地图',
        url: '/get-map-info',
        method: 'get',
        ip: '4',
        address: '中国广东省深圳市',
        system: 'Windows',
        browser: 'Firefox',
        takesTime: 1200,
        requestTime: new Date()
      }
    ]
    return {
      list,
      total: list.length, // 总条目数
      pageSize: 10, // 每页显示条目个数
      currentPage: 1 // 当前页数
    }
  }

  detail(id: number) {
    if (id == 1) {
      return {
        id: 1,
        level: 1,
        module: '菜单管理',
        url: '/menu',
        method: 'post',
        ip: '1.2.3.3.55',
        address: '中国河南省信阳市',
        system: 'macOS',
        browser: 'Chrome',
        takesTime: 10,
        responseHeaders: {
          traceId: '1495502411171032',
          'Content-Type': 'application/json',
          Connection: 'keep-alive',
          'Keep-Alive': 'timeout=5',
          'Content-Length': 17019
        },
        responseBody: {
          success: true,
          data: [
            {
              parentId: 0,
              id: 400,
              menuType: 0,
              title: 'menus.pureSysMonitor',
              name: 'PureMonitor',
              path: '/monitor',
              component: '',
              rank: 11,
              redirect: '',
              icon: 'ep:monitor',
              extraIcon: '',
              enterTransition: '',
              leaveTransition: '',
              activePath: '',
              auths: '',
              frameSrc: '',
              frameLoading: true,
              keepAlive: false,
              hiddenTag: false,
              fixedTag: false,
              showLink: true,
              showParent: false
            },
            {
              parentId: 400,
              id: 401,
              menuType: 0,
              title: 'menus.pureOnlineUser',
              name: 'OnlineUser',
              path: '/monitor/online-user',
              component: 'monitor/online/index',
              rank: null,
              redirect: '',
              icon: 'ri:user-voice-line',
              extraIcon: '',
              enterTransition: '',
              leaveTransition: '',
              activePath: '',
              auths: '',
              frameSrc: '',
              frameLoading: true,
              keepAlive: false,
              hiddenTag: false,
              fixedTag: false,
              showLink: true,
              showParent: false
            },
            {
              parentId: 400,
              id: 402,
              menuType: 0,
              title: 'menus.pureLoginLog',
              name: 'LoginLog',
              path: '/monitor/login-logs',
              component: 'monitor/logs/login/index',
              rank: null,
              redirect: '',
              icon: 'ri:window-line',
              extraIcon: '',
              enterTransition: '',
              leaveTransition: '',
              activePath: '',
              auths: '',
              frameSrc: '',
              frameLoading: true,
              keepAlive: false,
              hiddenTag: false,
              fixedTag: false,
              showLink: true,
              showParent: false
            },
            {
              parentId: 400,
              id: 403,
              menuType: 0,
              title: 'menus.pureOperationLog',
              name: 'OperationLog',
              path: '/monitor/operation-logs',
              component: 'monitor/logs/operation/index',
              rank: null,
              redirect: '',
              icon: 'ri:history-fill',
              extraIcon: '',
              enterTransition: '',
              leaveTransition: '',
              activePath: '',
              auths: '',
              frameSrc: '',
              frameLoading: true,
              keepAlive: false,
              hiddenTag: false,
              fixedTag: false,
              showLink: true,
              showParent: false
            },
            {
              parentId: 400,
              id: 404,
              menuType: 0,
              title: 'menus.pureSystemLog',
              name: 'SystemLog',
              path: '/monitor/system-logs',
              component: 'monitor/logs/system/index',
              rank: null,
              redirect: '',
              icon: 'ri:file-search-line',
              extraIcon: '',
              enterTransition: '',
              leaveTransition: '',
              activePath: '',
              auths: '',
              frameSrc: '',
              frameLoading: true,
              keepAlive: false,
              hiddenTag: false,
              fixedTag: false,
              showLink: true,
              showParent: false
            }
          ]
        },
        requestHeaders: {
          Accept: 'application/json, text/plain, */*',
          'Accept-Encoding': 'gzip, deflate',
          'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,eo;q=0.7',
          Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.admin',
          Connection: 'keep-alive',
          'Content-Length': 0,
          Cookie:
            '_ga=GA1.1.231800979.1704562367; _ga_M74ZHEQ1M1=GS1.1.1709299375.7.1.1709299476.0.0.0; Hm_lvt_6a7dac00248d3b6ad8479d7249bb29c5=1709032753,1709359575; Hm_lvt_23a157b7d0d9867f7a51e42628f052f5=1708960489,1709485849,1709879672; authorized-token={%22accessToken%22:%22eyJhbGciOiJIUzUxMiJ9.admin%22%2C%22expires%22:1919520000000}; multiple-tabs=true',
          Host: '192.168.2.121:8848',
          Origin: 'http://192.168.2.121:8848',
          Referer: 'http://192.168.2.121:8848/',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          'X-Requested-With': 'XMLHttpRequest'
        },
        requestBody: {
          title: '系统监控'
        },
        traceId: '1495502411171032',
        requestTime: new Date()
      }
    } else if (id == 2) {
      return {
        id: 2,
        level: 0,
        module: '地图',
        url: '/get-map-info?plateNumber=豫A59778U',
        method: 'get',
        ip: '1.2.3.3.55',
        address: '中国广东省深圳市',
        system: 'Windows',
        browser: 'Firefox',
        takesTime: 1200,
        responseHeaders: {
          traceId: '2280443117103208',
          'Content-Type': 'application/json',
          Connection: 'keep-alive',
          'Keep-Alive': 'timeout=5',
          'Content-Length': 28693
        },
        responseBody: {
          plateNumber: '豫A59778U',
          driver: '子骞',
          orientation: 289,
          lng: 113.8564,
          lat: 34.373
        },
        requestHeaders: {
          Accept: 'application/json, text/plain, */*',
          'Accept-Encoding': 'gzip, deflate',
          'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,eo;q=0.7',
          Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.admin',
          Connection: 'keep-alive',
          'Content-Length': 0,
          Cookie:
            '_ga=GA1.1.231800979.1704562367; _ga_M74ZHEQ1M1=GS1.1.1709299375.7.1.1709299476.0.0.0; Hm_lvt_6a7dac00248d3b6ad8479d7249bb29c5=1709032753,1709359575; Hm_lvt_23a157b7d0d9867f7a51e42628f052f5=1708960489,1709485849,1709879672; authorized-token={%22accessToken%22:%22eyJhbGciOiJIUzUxMiJ9.admin%22%2C%22expires%22:1919520000000}; multiple-tabs=true',
          Host: '192.168.2.121:8848',
          Origin: 'http://192.168.2.121:8848',
          Referer: 'http://192.168.2.121:8848/',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          'X-Requested-With': 'XMLHttpRequest'
        },
        requestBody: null,
        traceId: '2280443117103208',
        requestTime: new Date()
      }
    }
  }

  findAll() {
    return `This action returns all systemLog`
  }

  findOne(id: number) {
    return `This action returns a #${id} systemLog`
  }

  update(id: number, updateSystemLogDto: UpdateSystemLogDto) {
    return `This action updates a #${id} systemLog`
  }

  remove(id: number) {
    return `This action removes a #${id} systemLog`
  }
}
