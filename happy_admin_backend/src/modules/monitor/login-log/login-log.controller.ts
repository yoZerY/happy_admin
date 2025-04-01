import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { LoginLogService } from './login-log.service'
import { CreateLoginLogDto } from './dto/create-login-log.dto'
import { UpdateLoginLogDto } from './dto/update-login-log.dto'

@Controller('login-log')
export class LoginLogController {
  constructor(private readonly loginLogService: LoginLogService) {}

  @Post('list')
  list(@Body() createLoginLogDto: CreateLoginLogDto) {
    return this.loginLogService.list(createLoginLogDto)
  }

  @Get()
  findAll() {
    return this.loginLogService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loginLogService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLoginLogDto: UpdateLoginLogDto
  ) {
    return this.loginLogService.update(+id, updateLoginLogDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginLogService.remove(+id)
  }
}
