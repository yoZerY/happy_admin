import { Injectable } from '@nestjs/common'
import { MinioService } from '../minio/minio.service'

@Injectable()
export class UploadService {
  constructor(private readonly minioService: MinioService) {}

  async uploadFile(file) {
    return await this.minioService.uploadFile(file)
  }
}
