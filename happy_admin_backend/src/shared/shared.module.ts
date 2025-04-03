import { Module } from '@nestjs/common'
import { SharedService } from './shared.service'
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core'
import { AllExceptionsFilter } from '../common/filters/http-exceptions-filter'
import { ReponseTransformInterceptor } from '../common/interceptors/reponse-transform.interceptor'
import { CustomPrismaModule, PrismaModule } from 'nestjs-prisma'
import { PrismaConfigService } from './prisma/prisma.config.service'
import { ExtendedPrismaConfigService } from './prisma/extended.prisma.config.service'
import { CUSTOMPRISMASERVICE } from '../common/contants'
import { JwtAuthGuard } from '../common/guard/jwt-auth.guard'

@Module({
  imports: [
    PrismaModule.forRootAsync({
      isGlobal: true,
      useClass: PrismaConfigService
    }),
    CustomPrismaModule.forRootAsync({
      name: CUSTOMPRISMASERVICE,
      isGlobal: true,
      useClass: ExtendedPrismaConfigService
    })
  ],
  providers: [
    SharedService,
    //全局异常过滤器
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter
    },
    // 全局返回值转化拦截器
    {
      provide: APP_INTERCEPTOR,
      useClass: ReponseTransformInterceptor
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ]
})
export class SharedModule {}
