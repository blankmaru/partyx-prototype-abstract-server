import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { UserModel } from '../users/models/user.model'
import { EventDocument, EventModel } from './models/event.model'
import { Model, Schema as MongooseSchema } from 'mongoose'
import { CreateEventInput, ListEventInput } from './event.input'

@Injectable()
export class EventService {
    constructor(
        @InjectModel(EventModel.name)
        private readonly eventModel: Model<EventDocument>
    ) { }

    async list(filters: ListEventInput) {
        return await this.eventModel
            .find({ ...filters })
            .exec();
    }

    async getEventById(_id: MongooseSchema.Types.ObjectId) {
        return await this.eventModel
            .findById(_id)
            .exec();
    }

    async createEvent(payload: CreateEventInput) {
        const event = {
            ...payload
        }
        return await new this
            .eventModel(event)
            .save();
    }

    async deleteById(_id: MongooseSchema.Types.ObjectId) {
        return await this.eventModel
            .findByIdAndDelete(_id)
            .exec();
    }
}