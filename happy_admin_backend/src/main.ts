import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix('api')
  app.enableCors()

  const options = new DocumentBuilder()
    .setTitle('Nest Api')
    .setDescription('Nest Api')
    .setVersion('1.0')
    .addTag('Nest Api')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  await app.listen(process.env.PORT ?? 9999)
}

bootstrap()
