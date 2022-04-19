import { EditStudentDto } from './dto/edit-student.dto';
import { PrismaService } from './../prisma/prisma.service';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateStudnetDto } from './dto';

@Injectable()
export class StudentService {
    constructor(private prisma:PrismaService){}

    async GetStudents(classId:string,userId:string){
        const students = await this.prisma.student.findMany({
            where:{
                userId,
                classId
            }
        })
        return students
    }


   async CreateStudent(classId:string,dto:CreateStudnetDto,userId:string){
        const student = await this.prisma.student.create({
            data:{
                userId,
                classId,
                ...dto
            }
        })
        return student
    }

    async EditStudent(userId:string, classId:string, dto:EditStudentDto, studentId:string){
        const student = await this.prisma.student.findUnique({
            where:{
                id: studentId,  
            }
          
        })
     
        if(!student || student.classId !== classId || student.userId !== userId){
            throw new ForbiddenException("access to the resource denied", "5555" )
            
        }
        
        return this.prisma.student.update({
            where:{
               id: studentId,
            },
            data:{
                ...dto,
            }
        })
    }

    async DeleteStudent(userId:string, classId:string, studentId: string){
         const student = await this.prisma.student.findUnique({
             where:{
                 id: studentId
             }
         });

         if(!student || student.classId !== classId || student.userId !== userId){
            throw new ForbiddenException("access to the resource denied", "5555" )
            
        }
         
        await this.prisma.student.delete({
            where:{
                id: studentId
            }
        })
    }
}
