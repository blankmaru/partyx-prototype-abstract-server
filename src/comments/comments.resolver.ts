import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { CommentModel } from './models/comment.model';
import { Schema as MongooseSchema } from 'mongoose';
import { CreateCommentInput, UpdateCommentInput } from './comment.input';

@Resolver(() => CommentModel)
export class CommentsResolver {
    constructor(private readonly commentsService: CommentsService) {}

    @Query(() => CommentModel)
    async comment(
        @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
    ) {
        return this.commentsService.getById(_id);
    }

    @Mutation(() => CommentModel)
    async createComment(@Args('payload') payload: CreateCommentInput) {
        return this.commentsService.add(payload);
    }

    @Mutation(() => CommentModel)
    async updateComment(@Args('payload') payload: UpdateCommentInput) {
        return this.commentsService.update(payload);
    }

    @Mutation(() => CommentModel)
    async deleteComment(
        @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
    ) {
        return this.commentsService.delete(_id);
    }
}
