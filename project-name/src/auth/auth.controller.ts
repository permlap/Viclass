import { Body, HttpCode, HttpStatus } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto} from './dto';


@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Post("Sign-up")
    SignUp(
        @Body() body:CreateAuthDto
    ){
        return this.authService.SignUp(body)
    }
    @HttpCode(HttpStatus.OK)
    @Post("Sign-in")
     SignIn( @Body() body:CreateAuthDto){
        return this.authService.SignIn(body)
    }

}
