import { Controller, Post } from '@nestjs/common'
import { OnlineService } from './online.service'

@Controller('online')
export class OnlineController {
  constructor(private readonly onlineService: OnlineService) {}

  @Post('list')
  list() {
    return this.onlineService.list()
  }
}
