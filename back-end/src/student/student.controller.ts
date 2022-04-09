import { JwtGuard } from './../auth/guard/jwt.guard';
import { StudentService } from './student.service';
import { Controller, Param, Post, ParseUUIDPipe, Body, UseGuards, Get } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { CreateStudnetDto } from './dto';


@Controller('student')
export class StudentController {
    constructor(private service:StudentService){}

    @Get("get-students/:id")
    GetStudents(@Param("id", ParseUUIDPipe) classId:string){
        return this.service.GetStudents(classId)
    }

    @Post("create-student/:id")
    CreateStudent(
        
        @Param("id", ParseUUIDPipe) classId:string,
        @Body() dto:CreateStudnetDto
        ){
            return this.service.CreateStudent(classId,dto)
    }
}
