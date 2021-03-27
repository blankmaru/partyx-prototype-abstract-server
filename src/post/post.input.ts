import {Field, InputType} from '@nestjs/graphql';
import {Schema as MongooseSchema} from "mongoose"
import {CommentModel} from '../comments/models/comment.model'

@InputType()
export class CreatePostInput {
    @Field(() => String)
    title?: string;

    @Field(() => String)
    description: string;

    @Field(() => [CommentModel])
    comments: CommentModel[];
}

@InputType()
export class ListPostInput {
    _id?: MongooseSchema.Types.ObjectId

    @Field(() => String, { nullable: true })
    title?: string;

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => [CommentModel])
    comments?: CommentModel[];

}

@InputType()
export class UpdatePostInput {
    _id?: MongooseSchema.Types.ObjectId

    @Field(() => String, { nullable: true })
    title?: string;

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => [CommentModel])
    comments?: CommentModel[];

}