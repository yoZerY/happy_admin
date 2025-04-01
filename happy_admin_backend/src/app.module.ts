import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SharedModule } from './shared/shared.module'
import { AuthModule } from './modules/auth/auth.module'
import { UserModule } from './modules/system/user/user.module'
import { OnlineModule } from './modules/monitor/online/online.module'
import { RoleModule } from './modules/system/role/role.module'
import { MenuModule } from './modules/system/menu/menu.module'
import { LoginLogModule } from './modules/monitor/login-log/login-log.module'
import { OperationLogModule } from './modules/monitor/operation-log/operation-log.module'
import { SystemLogModule } from './modules/monitor/system-log/system-log.module'
import { DeptModule } from './modules/system/dept/dept.module'

@Module({
  imports: [
    SharedModule,
    AuthModule,
    UserModule,
    OnlineModule,
    RoleModule,
    MenuModule,
    LoginLogModule,
    OperationLogModule,
    SystemLogModule,
    DeptModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
