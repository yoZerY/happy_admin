import { Inject, Injectable } from '@nestjs/common'
import { MINIO_CLIENT } from '../../common/contants'
import * as Minio from 'minio'
import { ApiException } from '../../common/exceptions/api.exception'

@Injectable()
export class MinioService {
  @Inject(MINIO_CLIENT)
  private minioClient: Minio.Client

  async uploadFile(file: Express.Multer.File) {
    const fileName = `${Date.now()}-${file.originalname}`
    try {
      await this.minioClient.putObject(
        'happy-admin',
        fileName,
        file.buffer,
        file.size
      )
      return fileName
      // `http://localhost:9000/happy-admin/${file.originalname}`
    } catch (error) {
      throw new ApiException(error)
    }
  }
}
