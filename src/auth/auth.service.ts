import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserModel } from 'src/users/models/user.model';
import { UsersService } from 'src/users/users.service';
import bcrypt from 'bcryptjs'
import { jwtSecret } from 'src/config/config';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    async validate(name: string, password: string) {
        const user = this.usersService.getUserByName(name)

        if (!user) {
            return null;
        }

        const validPassword = bcrypt.compare(password, (await user).password);
        if (!validPassword) return null;

        return user;
    }

    login(user: UserModel): { access_token: string } {
        const payload = {
            name: user.name,
            sub: user._id
        }

        return {
            access_token: this.jwtService.sign(payload),
        }
    } 

    verify(token: string) {
        const decoded = this.jwtService.verify(token, {
            secret: jwtSecret
        })

        const user = this.usersService.getUserByName(decoded.name);

        if (!user) {
            return null;
        }

        return user;
    }
}
