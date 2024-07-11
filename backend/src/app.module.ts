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
  MemberModule,
  ProjectModule,
  ResourceProjectModule,
  TaskModule,
} from './modules';
import { ResourceModule } from './modules/resource/resource.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(AppDataSource.options),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'postgres',
    //     host: configService.get<string>('DB_HOST'),
    //     port: configService.get<number>('DB_PORT'),
    //     username: configService.get<string>('DB_USERNAME'),
    //     password: configService.get<string>('DB_PASSWORD'),
    //     database: configService.get<string>('DB_NAME'),
    //     entities: [__dirname + '/core/models/**/*.entity{.ts,.js}'],
    //     synchronize: false,
    //     migrations: [__dirname + '/core/migrations/*{.ts,.js}'],
    //     cli: {
    //       migrationsDir: 'src/migrations',
    //     },
    //   }),
    // }),
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
    JwtModule.register({
      global: true,
    }),
    ResourceProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
