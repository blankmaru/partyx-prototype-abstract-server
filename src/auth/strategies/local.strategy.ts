import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UnauthorizedError } from "type-graphql";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({ usernameField: 'name' })
    }

    async validate(name: string, password: string) {
        const user = await this.authService.validate(name, password);

        if (!user) throw new UnauthorizedError();

        return user;
    }
}