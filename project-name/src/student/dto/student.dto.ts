import { students } from './../../dt';
export class FindStudentResponseDto {
    id : string
    name: string
    teacher: string
}
export class CreateStudentDto{
    name: string
    teacher: string
}

export class UpdateStudentDto {
    name: string
    teacher: string
}
export class StudentDto{
    id : string
    name: string
    teacher: string
}