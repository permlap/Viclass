import { IsOptional, IsString } from "class-validator"

export class EditStudentDto {
    @IsOptional()
    @IsString()
    firstName?: string

    @IsOptional()
    @IsString()
    lastName?:string

    @IsOptional()
    @IsString()
    numberId?:string
}