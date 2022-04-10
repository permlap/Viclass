import { ConfigService } from '@nestjs/config';
import { PrismaService } from './../prisma/prisma.service';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from "argon2"
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(
        private prisma:PrismaService,
       private config:ConfigService,
       private jwt:JwtService
        ){}

   async signUp(dto:AuthDto){
        const hash = await argon.hash(dto.password)
        try{
        const user = await this.prisma.user.create({
            data:{
                email: dto.email,
                hash
            }
        })
        
        return this.signToken(user.id,user.email)
    }catch(error){
        if(error instanceof PrismaClientKnownRequestError){
            if(error.code ==="P2002"){
                throw new ForbiddenException("This email has been used", "1111")
            }
        }
    }
    }

   async signIn(dto:AuthDto){
        const user = await this.prisma.user.findUnique({
            where:{
                email:dto.email
            }
        })
        if(!user){
            throw new ForbiddenException("Cannot find this email","2222")
        }

        const PWmatch = await argon.verify(user.hash, dto.password)

        if(!PWmatch){
            throw new ForbiddenException("Passwrod is incorrect","3333")
        }
        return this.signToken(user.id,user.email)
    }

  async signToken(userId:string, email:string):Promise<{access_token: string}>{
        const payload = {
            sub: userId,
            email
        };

        const secret = await this.config.get("JWT_SECRET");
        const token = await this.jwt.signAsync(payload,{
            secret : secret
        })
        return {
            access_token: token,
        }
    }

}
