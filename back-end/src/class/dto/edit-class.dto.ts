import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class EditMyClass{

  @IsString()
  @IsOptional()
  classTitle?: string;

  @IsString()
  @IsOptional()
  classLevel?: string;
}