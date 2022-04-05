import { ClassService } from './class.service';
import { GetUser } from './../auth/decorator/user.decorator';
import { JwtGuard } from './../auth/guard/jwt.guard';
import { Body, Controller, Get, Param, ParseUUIDPipe, Post, UseGuards } from '@nestjs/common';
import { CreateClassDto } from './dto';


@UseGuards(JwtGuard)
@Controller('class')
export class ClassController {
    constructor(private service:ClassService){}

    @Get("my-classes")
    getMyclasses(@GetUser("id") userId:string){
        return this.service.getMyclasses(userId)
    }

    @Get("my-class")
    getMyclassById(
        @GetUser("id") userId:string,
        @Param("id", ParseUUIDPipe) classId:string
        )
        {
        return
    }
    
    @Post()
    CreateMyClass(@GetUser("id") userId:string, @Body() dto:CreateClassDto){
        return this.service.CreateMyClass(userId,dto)
    }
    
}
