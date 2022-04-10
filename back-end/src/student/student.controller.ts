import { JwtGuard } from './../auth/guard/jwt.guard';
import { StudentService } from './student.service';
import { Controller, Param, Post, ParseUUIDPipe, Body, UseGuards, Get } from '@nestjs/common';
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

    @Post("create-student/:id")
    CreateStudent(
        @GetUser("id") userId:string,
        @Param("id", ParseUUIDPipe) classId:string,
        @Body() dto:CreateStudnetDto
        ){
            return this.service.CreateStudent(classId,dto,userId)
    }
}
