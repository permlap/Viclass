import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
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
}
