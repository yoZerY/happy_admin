import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { SystemLogService } from './system-log.service'
import { UpdateSystemLogDto } from './dto/update-system-log.dto'

@Controller('system-log')
export class SystemLogController {
  constructor(private readonly systemLogService: SystemLogService) {}

  @Post('list')
  list() {
    return this.systemLogService.list()
  }

  @Post('detail')
  detail(@Body('id') id: number) {
    return this.systemLogService.detail(id)
  }

  @Get()
  findAll() {
    return this.systemLogService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.systemLogService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSystemLogDto: UpdateSystemLogDto
  ) {
    return this.systemLogService.update(+id, updateSystemLogDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.systemLogService.remove(+id)
  }
}
