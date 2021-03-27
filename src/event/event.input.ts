import {Field, InputType } from '@nestjs/graphql'
import { Schema as MongooseSchema } from 'mongoose';
import {UserModel} from '../users/models/user.model'
import { CommentModel } from 'src/comments/models/comment.model'

@InputType()
export class CreateEventInput {
    @Field(() => String, { nullable: true })
    title?: string;

    @Field(() => [String])
    photoUrls: string[];

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => String, { nullable: true })
    type?: string;

    @Field(() => String)
    dateStart?: String

    @Field(() => String)
    dateEnd?: String

    @Field(() => String)
    price?: String

    @Field(() => String)
    security?: String

    @Field(() => String)
    address?: string;

    @Field(() => [String], { nullable: true })
    tags?: string[];

    @Field(() => [UserModel], { nullable: true })
    going?: UserModel[];

    @Field(() => String, { nullable: true })
    date?: String;
}

@InputType()
export class ListEventInput {
    _id?: MongooseSchema.Types.ObjectId;

    @Field(() => String, { nullable: true })
    title?: string;

    @Field(() => [String])
    photoUrls: string[];

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => String, { nullable: true })
    type?: string;

    @Field(() => String)
    address?: string;

    @Field(() => [String], { nullable: true })
    tags?: string[];

    @Field(() => [UserModel], { nullable: true })
    going?: UserModel[];

    @Field(() => String, { nullable: true })
    date?: String;
}

@InputType()
export class UpdateEventInput {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Field(() => String, { nullable: true })
    title?: string;

    @Field(() => [String])
    photoUrls: string[];

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => String, { nullable: true })
    type?: string;

    @Field(() => String)
    address?: string;

    @Field(() => [String], { nullable: true })
    tags?: string[];

    @Field(() => [UserModel], { nullable: true })
    going?: UserModel[];
}

