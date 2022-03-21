import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { Module } from '@nestjs/common';

@Module({
    controllers:[StudentController],
    providers:[StudentService]
   
})
export class StudentModule {}
