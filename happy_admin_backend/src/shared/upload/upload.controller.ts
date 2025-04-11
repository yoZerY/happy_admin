import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { UploadService } from './upload.service'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  /* 单文件上传 */
  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return await this.uploadService.uploadFile(file)
  }
}
