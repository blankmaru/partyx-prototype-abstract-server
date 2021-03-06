import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { UserModel } from '../../users/models/user.model';

@ObjectType()
@InputType('EventInput')
@Schema()
export class EventModel {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Field(() => String, { nullable: true })
    @Prop()
    title?: string;

    @Field(() => [String], { nullable: true })
    @Prop()
    photoUrls: string[];

    @Field(() => String, { nullable: true })
    @Prop()
    description?: string;

    @Field(() => String, { nullable: true })
    @Prop()
    type?: string;

    @Field(() => String, { nullable: true })
    @Prop()
    address?: string;

    @Field(() => [String], { nullable: true })
    @Prop()
    tags?: string[];

    @Field(() => [UserModel], { nullable: true })
    @Prop()
    going?: UserModel[];

    @Field(() => String)
    @Prop()
    dateStart?: String

    @Field(() => String)
    @Prop()
    dateEnd?: String

    @Field(() => String)
    @Prop()
    price?: String

    @Field(() => String)
    @Prop()
    security?: String

    @Field(() => String, { nullable: true })
    @Prop()
    date?: String;
}

export type EventDocument = EventModel & Document;
export const EventSchema = SchemaFactory.createForClass(EventModel);