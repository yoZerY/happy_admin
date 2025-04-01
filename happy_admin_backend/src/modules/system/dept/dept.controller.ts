import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { DeptService } from './dept.service'
import { CreateDeptDto } from './dto/create-dept.dto'
import { UpdateDeptDto } from './dto/update-dept.dto'

@Controller('dept')
export class DeptController {
  constructor(private readonly deptService: DeptService) {}

  @Post('list')
  list(@Body() body: { name: string; status: number }) {
    return this.deptService.list(body)
  }

  @Post('create')
  create(@Body() dept: CreateDeptDto) {
    return this.deptService.create(dept)
  }

  @Get('all')
  findAll() {
    return this.deptService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deptService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeptDto: UpdateDeptDto) {
    return this.deptService.update(+id, updateDeptDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deptService.remove(+id)
  }
}
