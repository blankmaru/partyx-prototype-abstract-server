import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { CommentModel } from 'src/comments/models/comment.model';
import { EventModel } from 'src/event/models/event.model';
import { PostModel } from 'src/post/models/post.model';

@ObjectType()
@InputType('UserInput')
@Schema()
export class UserModel {
    @Field(() => String)
    @Prop()
    _id: MongooseSchema.Types.ObjectId;

    @Field(() => String)
    @Prop()
    name: string;

    @Field(() => String, { nullable: true })
    @Prop()
    password?: string;

    @Field(() => String)
    @Prop()
    description: string;

    @Field(() => String)
    @Prop()
    avatarUrl: string;

    @Field(() => [EventModel])
    @Prop([{ type: MongooseSchema.Types.ObjectId, ref: "EventModel" }])
    events: [EventModel]

    @Field(() => [EventModel])
    @Prop([{ type: MongooseSchema.Types.ObjectId, ref: "PostModel" }])
    posts: [PostModel]

    @Field(() => [CommentModel])
    @Prop([{ type: MongooseSchema.Types.ObjectId, ref: "CommentModel" }])
    comments: [CommentModel]
}

export type UserDocument = UserModel & Document;
export const UserSchema = SchemaFactory.createForClass(UserModel);