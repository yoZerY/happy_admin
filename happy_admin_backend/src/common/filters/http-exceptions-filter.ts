import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException
} from '@nestjs/common'
import { Request, Response } from 'express'

@Catch(HttpException)
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    const status = exception.getStatus()

    let message = 'Internal server error'

    const exceptionResponse = exception.getResponse()

    if (typeof exceptionResponse === 'object') {
      const msg = (exceptionResponse as any).message || message
      message = Array.isArray(msg) && msg.length > 0 ? msg[0] : msg
    } else {
      message = exceptionResponse
    }
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message
    })
  }
}
