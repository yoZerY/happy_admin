import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus
} from '@nestjs/common'
import { Request, Response } from 'express'
import { ApiException } from '../exceptions/api.exception'
import { AjaxResult } from '../class/ajax-result.class'

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    const { status, result } = this.getErrorResult(exception)
    response.status(status).json({
      timestamp: new Date().toISOString(),
      path: request.url,
      ...result
    })
  }

  getErrorResult(exception: unknown) {
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR

    const code =
      exception instanceof ApiException ? exception.getErrorCode() : status

    let message: string
    if (exception instanceof HttpException) {
      const response = exception.getResponse()
      const msg = (response as any).message
      const list = Array.isArray(msg) ? msg : [msg]
      message = list[0] || response
    } else {
      message = `${exception}`
    }
    return {
      status,
      result: AjaxResult.error(message, code)
    }
  }
}
