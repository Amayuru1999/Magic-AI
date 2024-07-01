import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignupDto } from "./dto/signup.dto";


@Controller()
export class AuthController{
    constructor(private readonly authService:AuthService){

    }
    @Post('/signup')
    async signup(@Body() signupDto:SignupDto){
        console.log('Body: ',signupDto)
    }
}