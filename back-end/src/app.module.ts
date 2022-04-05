import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ClassModule } from './class/class.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  })
  ,AuthModule
  ,PrismaModule, UserModule, ClassModule
  ],
})
export class AppModule {}