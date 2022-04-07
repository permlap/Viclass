
import { PrismaService } from './../prisma/prisma.service';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateClassDto, EditMyClass } from './dto';




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

    async CreateMyClass(userId:string, dto:CreateClassDto){
        const MyClass = await this.prisma.class.create({
            data:{
               userId,
               ...dto
           }
        })
        return MyClass
       
    }
   async EditMyClass(userId:string,dto:EditMyClass,classId:string){
      const MyClass = await this.prisma.class.findUnique({
          where:{
              id: classId
          }
      })
      if(!MyClass || MyClass.userId !== userId){
          throw new ForbiddenException("This class in not exist", "4444");
      }
        return this.prisma.class.update({
            where:{
                id:classId
            },
            data:{
                ...dto
            }
        })
    }
   async DeleteMyClass(userId:string,classId:string){
    const MyClass = await this.prisma.class.findUnique({
        where:{
            id: classId
        }
    })
    if(!MyClass || MyClass.userId !== userId){
        throw new ForbiddenException("Access to resources denied", "5555");
    }
    await this.prisma.class.delete({
        where:{
            id: classId
        }
    })
    }
    
}
