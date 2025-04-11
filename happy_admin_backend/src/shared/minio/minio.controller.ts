import { Controller, Get, Inject, Query } from '@nestjs/common'
import { MinioService } from './minio.service'
import { MINIO_CLIENT } from '../../common/contants/index'
import * as Minio from 'minio'
import { Public } from '../../common/decorators/public.decorator'

@Controller('minio')
export class MinioController {
  constructor(private readonly minioService: MinioService) {}

  @Inject(MINIO_CLIENT)
  private minioClient: Minio.Client

  @Public()
  @Get('presignedUrl')
  presignedPutObject(@Query('name') name: string) {
    return this.minioClient.presignedPutObject('happy-admin', name, 3600)
  }
}
