import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CommentModel } from '../../comments/models/comment.model';

@ObjectType()
@Schema()
export class PostModel {

    @Field(() => String)
    @Prop()
    title?: string;

    @Field(() => String)
    @Prop()
    description: string;

    @Field(() => [CommentModel])
    @Prop()
    comments: CommentModel[];
}

export type PostDocument = PostModel & Document;
export const PostSchema = SchemaFactory.createForClass(PostModel);