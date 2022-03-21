import { CreateStudentDto, FindStudentResponseDto, StudentDto, UpdateStudentDto } from './dto/student.dto';
import { StudentService } from './student.service';
import {Body, Controller, Get, Param, Post, Put} from "@nestjs/common"


@Controller("students")

export class StudentController{
    constructor(private studentService:StudentService){}
    @Get()
    GetStudent():FindStudentResponseDto[]{
     return this.studentService.getStudent()  
    }
    @Get("/:studentId")
    GetStudentById(
        @Param("studentId") studentId: string
    ):FindStudentResponseDto{
        return this.studentService.getStudentById(studentId)
    }
    @Post()
    CreateStudent(
        @Body() body:CreateStudentDto
    ):StudentDto{
        return this.studentService.createStudent(body)
    }
    @Put("/:studentId")
    UpdateStudentById(
        @Param("studentId") studentId: string,
        @Body() body:UpdateStudentDto
    ):StudentDto{
        return this.studentService.updateStudentById(body,studentId)
    }
    
}