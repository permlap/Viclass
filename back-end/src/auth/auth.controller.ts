import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(private service:AuthService){}

    @Post("sign-up")
    signUp(@Body() dto:AuthDto){
        return this.service.signUp(dto)
    }

    @Post("sign-in")
    signIn(@Body() dto:AuthDto){
        return this.service.signIn(dto)
    }
}
