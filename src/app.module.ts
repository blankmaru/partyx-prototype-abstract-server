import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MONGO_URI } from './config/config';
import { UserModule } from './users/models/user.module';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comments/models/comment.module';
import { EventModule } from './event/event.module';
import { OrganizationModule } from './organization/organization.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql'
    }),
    MongooseModule.forRoot(MONGO_URI),
    UserModule,
    AuthModule,
    CommentModule,
    EventModule,
    OrganizationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
