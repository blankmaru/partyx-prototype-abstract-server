import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { UserModel } from 'src/users/models/user.model';

@InputType()
export class CreateCommentInput {
    @Field(() => UserModel)
    user: UserModel;

    @Field(() => String)
    text: string;
}

@InputType()
export class UpdateCommentInput {
    _id?: MongooseSchema.Types.ObjectId;

    @Field(() => UserModel)
    user: UserModel;

    @Field(() => String, { nullable: true })
    text?: string;
}