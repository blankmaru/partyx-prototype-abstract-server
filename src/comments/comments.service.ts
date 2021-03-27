import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { CreateCommentInput, UpdateCommentInput } from './comment.input';
import { CommentModel, CommentDocument } from './models/comment.model';

@Injectable()
export class CommentsService {
    constructor(
        @InjectModel(CommentModel.name) private commentModel: Model<CommentDocument>,
    ) {}

    async add(payload: CreateCommentInput) {
        const newComment = new this.commentModel(payload);
        return await newComment.save();
    }

    async update(payload: UpdateCommentInput) {
        return await this.commentModel
            .findByIdAndUpdate(payload._id, payload, { new: true })
            .exec();
    }

    async getById(_id: MongooseSchema.Types.ObjectId) {
        return await this.commentModel.findById(_id).exec();
    }

    async delete(_id: MongooseSchema.Types.ObjectId) {
        return await this.commentModel.findByIdAndDelete(_id).exec();
    }
}
