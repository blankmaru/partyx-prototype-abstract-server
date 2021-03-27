import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { UserModel } from '../../users/models/user.model';
// import { OrganizationModel } from '../../organization/models/organization.model';
import { CommentModel } from '../../comments/models/comment.model';

@ObjectType()
@InputType('EventInput')
@Schema()
export class EventModel {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Field(() => String, { nullable: true })
    @Prop()
    title?: string;

    @Field(() => [String])
    @Prop()
    photoUrls: string[];

    @Field(() => String, { nullable: true })
    @Prop()
    description?: string;

    @Field(() => String, { nullable: true })
    @Prop()
    type?: string;

    @Field(() => String)
    @Prop()
    address?: string;

    @Field(() => [String], { nullable: true })
    @Prop()
    tags?: string[];

    @Field(() => [UserModel], { nullable: true })
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: "UserModel" })
    going?: UserModel[];

    // date start
    // date end
    // price
    // security

    @Field(() => String, { nullable: true })
    @Prop()
    date?: String;
}

export type EventDocument = EventModel & Document;
export const EventSchema = SchemaFactory.createForClass(EventModel);