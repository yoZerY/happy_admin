import { ExecutionContext, Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Reflector } from '@nestjs/core'
import { ApiException } from '../exceptions/api.exception'
import { PUBLIC_KEY } from '../contants/decorator.contant'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super()
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(PUBLIC_KEY, [
      context.getHandler(),
      context.getClass()
    ])
    if (isPublic) {
      return true
    }
    return super.canActivate(context)
  }

  /* 主动处理错误 */
  handleRequest(err, user, info) {
    console.log('user===============>>>>>>', user)
    console.info(info)
    if (err || !user || !user.username) {
      throw err || new ApiException('登录状态已过期', 401)
    }
    // 返回值会被挂载到request的user上
    return user
  }
}
