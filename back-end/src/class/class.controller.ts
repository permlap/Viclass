import { ClassService } from './class.service';
import { GetUser } from './../auth/decorator/user.decorator';
import { JwtGuard } from './../auth/guard/jwt.guard';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateClassDto, EditMyClass } from './dto';


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

    @Patch(":id")
    EditeMyClass(
        @GetUser("id") userId:string,
        @Body()  dto:EditMyClass,
        @Param("id", ParseUUIDPipe) classId:string
    ){
        return this.service.EditMyClass(userId,dto,classId)

    }

    @Delete(":id")
    DeleteMyClass(
        @GetUser("id") userId:string,
        @Param("id", ParseUUIDPipe) classId:string
    ){
        return this.service.DeleteMyClass(userId,classId)

    }
    
}
