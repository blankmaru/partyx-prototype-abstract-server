import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PostModel } from "./models/post.model";
import { CreatePostInput, UpdatePostInput } from "./post.input";
import { PostService } from "./post.service";
import { Model, Schema as MongooseSchema } from 'mongoose'

@Resolver(() => PostModel)
export class PostResolver {
    constructor(
        private readonly postService: PostService
    ) { }

    @Query(() => PostModel)
    async post(
        @Args('_id', { type: () => String })
        _id: MongooseSchema.Types.ObjectId
    ) {
        return this.postService.getPostById(_id);
    }

    @Mutation(() => PostModel)
    async createPost(
        @Args('payload') payload: CreatePostInput
    ) {
        return this.postService.createPost(payload);
    }

    @Mutation(() => PostModel)
    async updatePost(
        @Args('payload') payload: UpdatePostInput
    ) {
        return this.postService.updatePost(payload);
    }

    @Mutation(() => PostModel)
    async deletePost(
        @Args('_id', { type: () => String })
        _id: MongooseSchema.Types.ObjectId,
    ) {
        return this.postService.deleteById(_id);
    }


}