import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './core/user/user.module';
import { AuthModule } from './core/auth/auth.module';
import { RolesModule } from './core/roles/roles.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AdminModule } from './core/admin/admin.module';
import { AppDataSource } from './core/config/data-source';
import {
  ActivityModule,
  EventModule,
  MemberActivityModule,
  MemberModule,
  ProjectModule,
  ResourceModule,
  ResourceProjectModule,
  TaskModule,
} from './modules';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.register({
      global: true,
    }),
    TypeOrmModule.forRoot(AppDataSource.options),
    UserModule,
    AuthModule,
    RolesModule,
    AdminModule,
    ActivityModule,
    EventModule,
    MemberModule,
    ProjectModule,
    TaskModule,
    ResourceProjectModule,
    ResourceModule,
    ResourceProjectModule,
    MemberActivityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
