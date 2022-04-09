import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateStudnetDto{

    @IsNotEmpty()
    @IsString()
    firstName:string

    @IsNotEmpty()
    @IsString()
    lastName:string

    @IsOptional()
    @IsString()
    numberId?:string
}