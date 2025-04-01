import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { OperationLogService } from './operation-log.service'
import { CreateOperationLogDto } from './dto/create-operation-log.dto'
import { UpdateOperationLogDto } from './dto/update-operation-log.dto'

@Controller('operation-log')
export class OperationLogController {
  constructor(private readonly operationLogService: OperationLogService) {}

  @Post('list')
  list() {
    return this.operationLogService.list()
  }

  @Get()
  findAll() {
    return this.operationLogService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.operationLogService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOperationLogDto: UpdateOperationLogDto
  ) {
    return this.operationLogService.update(+id, updateOperationLogDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.operationLogService.remove(+id)
  }
}
