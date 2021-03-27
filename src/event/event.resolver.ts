import {EventModel} from './models/event.model'
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql'
import {EventService} from './event.service'
import {Schema as MongooseSchema} from 'mongoose'
import {CreateEventInput} from './event.input'

@Resolver(() => EventModel)
export class EventResolver {
   constructor(private readonly eventService: EventService) {}

   @Query(() => EventModel)
   async event(
       @Args('_id', {type: () => String})
       _id: MongooseSchema.Types.ObjectId
   ) {
      return this.eventService.getEventById(_id);
   }

   @Mutation(() => EventModel)
   async createEvent(
       @Args('payload') payload: CreateEventInput
   ) {
      return this.eventService.createEvent(payload);
   }

   @Mutation(() => EventModel)
   async deleteEvent(
       @Args('_id', {type: () => String})
       _id: MongooseSchema.Types.ObjectId
   ) {
      return this.eventService.deleteById(_id);
   }

}