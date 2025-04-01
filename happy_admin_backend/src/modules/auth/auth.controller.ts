import { Body, Controller, Get, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDto } from './dto/login.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() user: LoginDto) {
    return this.authService.login(user)
  }

  @Get('get-async-routes')
  getAsyncRoutes() {
    return this.authService.getAsyncRoutes()
  }

  @Get('mine')
  mine() {
    return this.authService.mine()
  }

  @Get('mine-logs')
  mineLogs() {
    return this.authService.mineLogs()
  }

  @Post('refresh-token')
  refreshToken() {
    return this.authService.refreshToken()
  }
}
