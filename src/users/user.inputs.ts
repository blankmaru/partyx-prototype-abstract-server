import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { EventModel } from 'src/event/models/event.model'
import { CommentModel } from 'src/comments/models/comment.model'

@InputType()
export class CreateUserInput {
    @Field(() => String)
    name: string;

    @Field(() => String)
    password?: string;

    @Field(() => String)
    description?: string;

    @Field(() => String)
    avatarUrl?: string;
}

@InputType()
export class ListUserInput {
    _id?: MongooseSchema.Types.ObjectId;

    @Field(() => String, { nullable: true })
    name?: string;
    
    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => String, { nullable: true })
    avatarUrl?: string;
}

@InputType()
export class UpdateUserInput {
    _id?: MongooseSchema.Types.ObjectId;

    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => String, { nullable: true })
    avatarUrl?: string;
}