import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from './../prisma/prisma.service';
import { ForbiddenException, Injectable } from '@nestjs/common';
import * as agron from "argon2"
import { CreateAuthDto } from './dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';


@Injectable()
export class AuthService {
    constructor(
        private prismaService:PrismaService, 
        private jwtService:JwtService,
        private configService:ConfigService){}
    async SignUp(body: CreateAuthDto){

        const hash = await agron.hash(body.password)
        try{
        const user = await this.prismaService.user.create({
            data:{
                email: body.email,
                hash
            }
        })
        delete user.hash;
        return this.SignInToken(user.id, user.email);
        }catch(error){
             if(error instanceof PrismaClientKnownRequestError){
                    if(error.code === "P2002"){
                        throw new ForbiddenException("This email has been used", )
                    }
                } 
                throw error

            }
    }
           

    async SignIn(body:CreateAuthDto){

        const user = await this.prismaService.user.findUnique({
            where: {
                email: body.email,
            },
        });
        if(!user){
            throw new ForbiddenException("Your email is incoorect!",)
        }
        const pwMatch = await agron.verify(
            user.hash,
            body.password
        );
        if(!pwMatch){
            throw new ForbiddenException("Your password is incoorect!",)
        }
        delete user.hash;
        return this.SignInToken(user.id, user.email);
    }
   async SignInToken (userId:number, email:string): Promise<{acces_token: string}>{
       {
           const payload = {
               sub: userId,
               email
           }
           const secret = this.configService.get("JWT_SECRET")
           const token = await this.jwtService.signAsync(payload, {
               expiresIn: "15m",
               secret: secret
           })
           
        return {
            acces_token: token,
        }
       }
       
   }
}
