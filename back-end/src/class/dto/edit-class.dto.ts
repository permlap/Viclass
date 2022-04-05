import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateClassDto{

  @IsString()
  @IsOptional()
  classTitle?: string;

  @IsString()
  @IsOptional()
  classLevel?: string;
}