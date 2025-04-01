import { Injectable } from '@nestjs/common'
import { LoginDto } from './dto/login.dto'

@Injectable()
export class AuthService {
  login(user: LoginDto) {
    if (user.username === 'admin') {
      return {
        avatar: 'https://avatars.githubusercontent.com/u/44761321',
        username: 'admin',
        nickname: '小铭',
        // 一个用户可能有多个角色
        roles: ['admin'],
        // 按钮级别权限
        permissions: ['*:*:*'],
        accessToken: 'eyJhbGciOiJIUzUxMiJ9.admin',
        refreshToken: 'eyJhbGciOiJIUzUxMiJ9.adminRefresh',
        expires: '2030/10/30 00:00:00'
      }
    } else {
      return {
        avatar: 'https://avatars.githubusercontent.com/u/52823142',
        username: 'common',
        nickname: '小林',
        roles: ['common'],
        permissions: ['permission:btn:add', 'permission:btn:edit'],
        accessToken: 'eyJhbGciOiJIUzUxMiJ9.common',
        refreshToken: 'eyJhbGciOiJIUzUxMiJ9.commonRefresh',
        expires: '2030/10/30 00:00:00'
      }
    }
  }

  getAsyncRoutes() {
    const permissionRouter = {
      path: '/permission',
      meta: {
        title: '权限管理',
        icon: 'ep:lollipop',
        rank: 10
      },
      children: [
        {
          path: '/permission/page/index',
          name: 'PermissionPage',
          meta: {
            title: '页面权限',
            roles: ['admin', 'common']
          }
        },
        {
          path: '/permission/button',
          meta: {
            title: '按钮权限',
            roles: ['admin', 'common']
          },
          children: [
            {
              path: '/permission/button/router',
              component: 'permission/button/index',
              name: 'PermissionButtonRouter',
              meta: {
                title: '路由返回按钮权限',
                auths: [
                  'permission:btn:add',
                  'permission:btn:edit',
                  'permission:btn:delete'
                ]
              }
            },
            {
              path: '/permission/button/login',
              component: 'permission/button/perms',
              name: 'PermissionButtonLogin',
              meta: {
                title: '登录接口返回按钮权限'
              }
            }
          ]
        }
      ]
    }

    const systemManagementRouter = {
      path: '/system',
      meta: {
        icon: 'ri:settings-3-line',
        title: '系统管理',
        rank: 0
      },
      children: [
        {
          path: '/system/user/index',
          name: 'SystemUser',
          meta: {
            icon: 'ri:admin-line',
            title: '人员管理',
            roles: ['admin']
          }
        },
        {
          path: '/system/role/index',
          name: 'SystemRole',
          meta: {
            icon: 'ri:admin-fill',
            title: '角色管理',
            roles: ['admin']
          }
        },
        {
          path: '/system/menu/index',
          name: 'SystemMenu',
          meta: {
            icon: 'ep:menu',
            title: '菜单管理',
            roles: ['admin']
          }
        },
        {
          path: '/system/dept/index',
          name: 'SystemDept',
          meta: {
            icon: 'ri:git-branch-line',
            title: '部门管理',
            roles: ['admin']
          }
        }
      ]
    }

    const systemMonitorRouter = {
      path: '/monitor',
      meta: {
        icon: 'ep:monitor',
        title: '系统监控',
        rank: 3
      },
      children: [
        {
          path: '/monitor/online-user',
          component: 'monitor/online/index',
          name: 'OnlineUser',
          meta: {
            icon: 'ri:user-voice-line',
            title: '在线用户',
            roles: ['admin']
          }
        },
        {
          path: '/monitor/login-logs',
          component: 'monitor/logs/login/index',
          name: 'LoginLog',
          meta: {
            icon: 'ri:window-line',
            title: '登录日志',
            roles: ['admin']
          }
        },
        {
          path: '/monitor/operation-logs',
          component: 'monitor/logs/operation/index',
          name: 'OperationLog',
          meta: {
            icon: 'ri:history-fill',
            title: '操作日志',
            roles: ['admin']
          }
        },
        {
          path: '/monitor/system-logs',
          component: 'monitor/logs/system/index',
          name: 'SystemLog',
          meta: {
            icon: 'ri:file-search-line',
            title: '系统日志',
            roles: ['admin']
          }
        }
      ]
    }

    return [systemManagementRouter, systemMonitorRouter, permissionRouter]
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
