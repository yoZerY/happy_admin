import { Body, Controller, Get, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDto } from './dto/login.dto'
import { Public } from '../../common/decorators/public.decorator'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('signIn')
  signIn(@Body() user: LoginDto) {
    return this.authService.signIn(user)
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
