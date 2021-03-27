import { Injectable, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { UserModel, UserDocument } from './models/user.model';
import { CreateUserInput, UpdateUserInput, ListUserInput } from './user.inputs';
const bcrypt = require("bcryptjs");

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(UserModel.name) private userModel: Model<UserDocument>,
    ) {}

    async list(filters: ListUserInput) {
        return this.userModel.find({ ...filters }).exec();
    }

    async getAllUsers() {
        return await this.userModel.find({});
    }

    @UseGuards(LocalAuthGuard)
    async getUserByName(name: string) {
        return await this.userModel.findOne({ name: name }).exec();
    }

    async createUser(payload: CreateUserInput) {
        const hashedPassword = await bcrypt.hash(payload?.password, 10);
        const user = {
            name: payload.name,
            password: hashedPassword,
            description: payload.description,
            avatarUrl: payload.avatarUrl,
        }
        const newUser = new this.userModel(user);
        return await newUser.save();
    }

    async updateUser(payload: UpdateUserInput) {
        return await this.userModel
            .findByIdAndUpdate(payload._id, payload, { new: true })
            .exec();
    }

    async getById(_id: MongooseSchema.Types.ObjectId) {
        return await this.userModel.findById(_id).exec();
    }

    async deleteUser(_id: MongooseSchema.Types.ObjectId) {
        return await this.userModel.findByIdAndDelete(_id).exec();
    }
}
