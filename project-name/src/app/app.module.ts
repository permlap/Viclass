import { UserModule } from '../user/user.module';
import { BookmarkModule } from '../bookmark/bookmark.module';
import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    AuthModule,
    PrismaModule,
    BookmarkModule,
    UserModule],
})
export class AppModule {}
