import { EditStudentDto } from './dto/edit-student.dto';
import { JwtGuard } from './../auth/guard/jwt.guard';
import { StudentService } from './student.service';
import { Controller, Param, Post, ParseUUIDPipe, Body, UseGuards, Get, Patch, Delete } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { CreateStudnetDto } from './dto';

@UseGuards(JwtGuard)
@Controller('student')
export class StudentController {
    constructor(private service:StudentService){}

    @Get("get-students/:id")
    GetStudents(
        @GetUser("id") userId:string,
        @Param("id", ParseUUIDPipe) classId:string
        ){
        return this.service.GetStudents(classId,userId)
    }

    @Get("get-studentbyid/:classId/:studentId")
    GetStudentById(
        @GetUser("id") userId:string,
        @Param("classId", ParseUUIDPipe) classId:string,
        @Param("studentId", ParseUUIDPipe) studentId:string
        ){
        return this.service.GetStudentById(classId,userId,studentId)
    }

    @Post("create-student/:id")
    CreateStudent(
        @GetUser("id") userId:string,
        @Param("id", ParseUUIDPipe) classId:string,
        @Body() dto:CreateStudnetDto
        ){
            return this.service.CreateStudent(classId,dto,userId)
    }

    @Patch("edit-student/:classId/:studentId")
    EditStudent(
        @GetUser("id") userId:string,
        @Param("classId", ParseUUIDPipe) classId:string,
        @Param("studentId", ParseUUIDPipe) studentId:string,
        @Body() dto:EditStudentDto
    ){
        return this.service.EditStudent(userId,classId,dto,studentId)
    }

    @Delete('delete-student/:classId/:studentId')
    DeleteStudent(
        @GetUser("id") userId:string,
        @Param("classId", ParseUUIDPipe) classId:string,
        @Param("studentId", ParseUUIDPipe) studentId:string,
    ){
        return this.service.DeleteStudent(userId, classId, studentId)
    }
}
