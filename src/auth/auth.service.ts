import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/db/prisma.service";
import { SignupDto } from "./dto/signup.dto";
import bcrypt from "bcrypt";


@Injectable()
export class AuthService{
    constructor(private prisma: PrismaService){}

    async signup(signupDto:SignupDto){

        const randomUUID =crypto.randomUUID();
        const randomSalt=await bcrypt.genSalt(10);
        const hashedApiKey=await bcrypt.hash(randomUUID,randomSalt);

        return this.prisma.user.create({data:{ ...signupDto, api_key: hashedApiKey}})
    }
}