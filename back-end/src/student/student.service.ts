import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateStudnetDto } from './dto';

@Injectable()
export class StudentService {
    constructor(private prisma:PrismaService){}

    async GetStudents(classId:string){
        const students = await this.prisma.student.findMany({
            where:{
                classId
            }
        })
        return students
    }


   async CreateStudent(classId:string,dto:CreateStudnetDto){
        const student = await this.prisma.student.create({
            data:{
                classId,
                ...dto
            }
        })
        return student
    }
}
