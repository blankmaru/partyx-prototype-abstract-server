import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsResolver } from '../comments.resolver';
import { CommentsService } from '../comments.service';

import { CommentModel, CommentSchema } from '../../comments/models/comment.model';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: CommentModel.name, schema: CommentSchema }]),
    ],
    providers: [CommentsService, CommentsResolver],
    exports: [CommentsService]
})
export class CommentModule {}