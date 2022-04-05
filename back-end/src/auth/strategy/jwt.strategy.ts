
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class JwtStrategy extends PassportStrategy(
    Strategy,
    "jwt",
){
    constructor(configService : ConfigService, private prisma:PrismaService) {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          secretOrKey: configService.get("JWT_SECRET"),
        });
    }
  async validate(payload: {email: string, sub:string}){
      const user = await this.prisma.user.findUnique({
          where:{
              id: payload.sub
          }
      })
      delete user.hash
        return user

    }
}