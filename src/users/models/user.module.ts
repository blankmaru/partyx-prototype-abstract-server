import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersResolver } from '../users.resolver';
import { UsersService } from '../users.service';

import { UserModel, UserSchema } from './user.model';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }]),
    ],
    providers: [UsersService, UsersResolver],
    exports: [UsersService]
})
export class UserModule {}