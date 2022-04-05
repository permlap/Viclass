import { UserService } from './user.service';
import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { EditUserDto } from './dto';

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
    constructor(private service:UserService){}

    @Get("me")
    getUser(@GetUser() user:User){
        return user
    }

    @Patch()
    editUser(
        @GetUser("id") userId:string,
        @Body() dto:EditUserDto
    
    )
    {
        return this.service.editUser(userId,dto)
    }
}
