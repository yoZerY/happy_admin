import { Body, Controller, Get, Post } from '@nestjs/common'
import { RoleService } from './role.service'
import { CreateRoleDto } from './dto/create-role.dto'
import { UpdateRoleDto } from './dto/update-role.dto'

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post('list')
  list(@Body() body: any) {
    return this.roleService.list(body)
  }

  @Get('all-role')
  findAll() {
    return this.roleService.findAll()
  }

  @Post('user-role-ids')
  userRoleIds(@Body() body: { userId: number }) {
    return this.roleService.userRoleIds(body.userId)
  }

  @Post('create')
  create(@Body() role: CreateRoleDto) {
    return this.roleService.create(role)
  }

  @Post('delete')
  delete(@Body() data: { ids: number[] }) {
    return this.roleService.delete(data.ids)
  }

  @Post('update')
  update(@Body() data: UpdateRoleDto) {
    return this.roleService.update(data)
  }
}
