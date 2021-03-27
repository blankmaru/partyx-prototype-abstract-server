import { Field, InputType } from '@nestjs/graphql';
import { EventModel } from '../event/models/event.model';
import { Schema as MongooseSchema } from 'mongoose';
import { PostModel } from '../post/models/post.model'
import { CommentModel } from '../comments/models/comment.model'

@InputType()
export class CreateOrgInput {
    @Field(() => String)
    name: string;

    @Field(() => String)
    description: string;

    @Field(() => [EventModel])
    events: EventModel[];

    @Field(() => [PostModel])
    posts: PostModel[];

    @Field(() => [CommentModel])
    comments: CommentModel[]
}

@InputType()
export class ListOrgInput {
    _id?: MongooseSchema.Types.ObjectId;

    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => [EventModel], { nullable: true })
    events?: EventModel[];

    @Field(() => [PostModel])
    posts?: PostModel[];

    @Field(() => [CommentModel])
    comments?: CommentModel[]
}

@InputType()
export class UpdateOrgInput {
    _id?: MongooseSchema.Types.ObjectId;

    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => [EventModel], { nullable: true })
    events?: EventModel[];

    @Field(() => [PostModel])
    posts?: PostModel[];

    @Field(() => [CommentModel])
    comments?: CommentModel[]
}