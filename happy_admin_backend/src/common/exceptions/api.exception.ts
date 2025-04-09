import { HttpException } from '@nestjs/common'

export class ApiException extends HttpException {
  private errorCode: number

  constructor(message: string, errorCode?: number) {
    //权限问题一律使用401错误码
    if (errorCode && errorCode == 401) {
      super(message, 200)
      this.errorCode = 401
    } else {
      //其他异常一律使用500错误码
      super(message, errorCode ?? 200)
      this.errorCode = errorCode ?? 500
    }

    this.name = ApiException.name
  }

  getErrorCode(): number {
    return this.errorCode
  }
}
