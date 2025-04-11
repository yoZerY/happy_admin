import { Global, Module } from '@nestjs/common'
import { MinioService } from './minio.service'
import { MinioController } from './minio.controller'
import * as Minio from 'minio'
import { MINIO_CLIENT } from '../../common/contants/index'

// {
//   url: 'http://localhost:9001/api/v1/service-account-credentials',
//   accessKey: '9l6flUzmIjfE75yhFNHG',
//   secretKey: 'qbhv42HutD6l38nwcoQg7sOLZVcaKItLbBvzLMk7',
//   api: 's3v4',
//   path: 'auto'
// }

@Global()
@Module({
  controllers: [MinioController],
  providers: [
    {
      provide: MINIO_CLIENT,
      useFactory() {
        const client = new Minio.Client({
          endPoint: 'localhost',
          port: 9000,
          useSSL: false,
          accessKey: '9l6flUzmIjfE75yhFNHG',
          secretKey: 'qbhv42HutD6l38nwcoQg7sOLZVcaKItLbBvzLMk7'
        })
        return client
      }
    },
    MinioService
  ],
  exports: [MinioService]
})
export class MinioModule {}
