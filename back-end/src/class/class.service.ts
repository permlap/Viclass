import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto';



@Injectable()
export class ClassService {
    constructor(private prisma:PrismaService){}

    async getMyclasses(userId:string){
        const cards = await this.prisma.class.findMany({
            where:{
                userId
            }
        })
        return cards
    }

   async CreateMyClass(userId:string,dto:CreateClassDto){
        const MyClass = await this.prisma.class.create({
            data:{
                id : userId,
                ...dto
            }
        })
        return MyClass
       
    }
    
}
