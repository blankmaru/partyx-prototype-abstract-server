import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PostDocument, PostModel } from './models/post.model';
import { CreatePostInput, ListPostInput, UpdatePostInput } from './post.input';
import { Model, Schema as MongooseSchema } from 'mongoose';

@Injectable()
export class PostService {
    constructor(
        @InjectModel(PostModel.name)
        private readonly postModel: Model<PostDocument>
    ) { }

    async list(filters: ListPostInput) {
        return await this.postModel
            .find({ ...filters })
            .exec();
    }

    async getPostById(_id: MongooseSchema.Types.ObjectId) {
        return await this.postModel
            .findById(_id)
            .exec();
    }

    async createPost(payload: CreatePostInput) {
        return await new this.postModel({ ...payload }).save();
    }

    async updatePost(payload: UpdatePostInput) {
        return await this.postModel
            .findByIdAndUpdate(payload);
    }

    async deleteById(_id: MongooseSchema.Types.ObjectId) {
        return await this.postModel
            .findByIdAndDelete(_id)
            .exec();
    }

}