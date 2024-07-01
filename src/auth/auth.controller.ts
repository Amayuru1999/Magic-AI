import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignupDto } from "./dto/signup.dto";
import { AccessKeyDto } from "./dto/accessKey.dto";


@Controller()
export class AuthController{
    constructor(private readonly authService:AuthService){

    }
    @Post('/signup')
    async signup(@Body() signupDto:SignupDto){
        console.log('Body: ',signupDto);
        return this.authService.signup(signupDto);
    }

    @Post('/access-key')
  async accessKey(@Body() accessKeyDto: AccessKeyDto) {
    console.log('Key: ', accessKeyDto);
    return this.authService.getAccessKey(accessKeyDto);
  }
}