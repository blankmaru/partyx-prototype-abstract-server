import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { CommentModel } from '../../comments/models/comment.model';

@ObjectType()
@InputType('PostInput')
@Schema()
export class PostModel {

    @Field(() => String)
    @Prop()
    title?: string;

    @Field(() => String)
    @Prop()
    description: string;

    @Field(() => [CommentModel])
    @Prop([{ type: MongooseSchema.Types.ObjectId, ref: "CommentModel" }])
    comments: CommentModel[];
}

export type PostDocument = PostModel & Document;
export const PostSchema = SchemaFactory.createForClass(PostModel);