export class AjaxResult {
  readonly code: number
  readonly message: string;

  [key: string]: any

  constructor(code, message, data) {
    this.code = code
    this.message = message
    Object.assign(this, data)
  }

  static success(data?: any, message = 'success') {
    return new AjaxResult(200, message, { data })
  }

  static error(message = 'fail', code = 500) {
    return new AjaxResult(code, message, null)
  }
}
