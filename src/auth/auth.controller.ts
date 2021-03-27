import { Request } from 'express';
import { Controller, Post, Req } from "@nestjs/common";
import { UserModel } from "src/users/models/user.model";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    login(@Req() req: Request): { access_token: string }  {
        console.log(req)
        const user = { name: req.body.name, password: req.body.password };
        console.log(user)
        const res = this.authService.login(user as UserModel);
        console.log(res);
        return res;
    }
}