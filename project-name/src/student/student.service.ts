import { students } from './../dt';
import { Injectable } from '@nestjs/common';
import { CreateStudentDto, FindStudentResponseDto, StudentDto, UpdateStudentDto } from './dto/student.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class StudentService {
    private students = students

    getStudent():FindStudentResponseDto[]{
        return this.students
    }
    getStudentById(id : string):FindStudentResponseDto{
        return this.students.find(student =>{
            return student.id === id
        })
    }
    createStudent(payload: CreateStudentDto): StudentDto{
        let newStudent ={
            id: randomUUID(),
            ...payload

        }
        this.students.push(newStudent)
        return newStudent
    }
    updateStudentById(payload: UpdateStudentDto, id: string): StudentDto {
        let updatedStudent: StudentDto

        let updatedStudentList = this.students.map(student => {
            if(student.id === id){
                updatedStudent = {
                    id,
                    ...payload
                };
                return updatedStudent
            } else return student
        });

        this.students = updatedStudentList

        return updatedStudent
    }
  
    
}
