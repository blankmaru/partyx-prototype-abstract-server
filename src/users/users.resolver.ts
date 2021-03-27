import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

import { UserModel } from './models/user.model';
import { CreateUserInput, ListUserInput, UpdateUserInput } from './user.inputs';
import { UsersService } from './users.service'; 

@Resolver(() => UserModel)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

    @Query(() => UserModel)
    async user(
        @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
    ) {
        return this.usersService.getById(_id);
    }

    @Query(() => [UserModel])
    async users(
        @Args('filters', { nullable: true }) filters?: ListUserInput,
    ) {
        return this.usersService.list(filters);
    }

    @Mutation(() => UserModel)
    async createUser(@Args('payload') payload: CreateUserInput) {
        return this.usersService.createUser(payload);
    }

    @Mutation(() => UserModel)
    async updateUser(@Args('payload') payload: UpdateUserInput) {
        return this.usersService.updateUser(payload);
    }

    @Mutation(() => UserModel)
    async deleteUser(
        @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
    ) {
        return this.usersService.deleteUser(_id);
    }
}
