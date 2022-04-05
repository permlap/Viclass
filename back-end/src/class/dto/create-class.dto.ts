import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateClassDto{

   @IsString()
    @IsNotEmpty()
    classTitle:string

    @IsString()
    @IsNotEmpty()
    classLevel:string

    
}