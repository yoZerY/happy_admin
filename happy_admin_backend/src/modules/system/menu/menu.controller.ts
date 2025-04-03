import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { MenuService } from './menu.service'
import { UpdateMenuDto } from './dto/update-menu.dto'
import { CreateMenuDto } from './dto/create-menu.dto'

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post('role-menu')
  roleMenu() {
    return this.menuService.roleMenu()
  }

  @Post('role-menu-ids')
  roleMenuIds(@Body('id') id: number) {
    return this.menuService.roleMenuIds(id)
  }

  @Post('list')
  list() {
    return this.menuService.list()
  }

  @Post('create')
  create(@Body() menu: CreateMenuDto) {
    return this.menuService.create(menu)
  }

  @Post('update')
  update(@Body() info: UpdateMenuDto) {
    return this.menuService.update(info)
  }

  @Get()
  findAll() {
    return this.menuService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(+id)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuService.remove(+id)
  }
}
