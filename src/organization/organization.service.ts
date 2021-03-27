import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { OrganizationModel, OrgDocument } from './models/organization.model';
import { CreateOrgInput, ListOrgInput, UpdateOrgInput } from './organization.input';

@Injectable()
export class OrganizationService {
    constructor(
        @InjectModel(OrganizationModel.name)
        private readonly orgModel: Model<OrgDocument>
    ) { }

    async list(filters: ListOrgInput) {
        return await this.orgModel
            .find({ ...filters })
            .exec();
    }

    async getOrgById(_id: MongooseSchema.Types.ObjectId) {
        return await this.orgModel
            .findById(_id);
    }

    async createOrg(payload: CreateOrgInput) {
        return await new this.orgModel({ ...payload })
            .save();
    }

    async updateOrg(payload: UpdateOrgInput) {
        return await this.orgModel
            .findByIdAndUpdate(payload);
    }

    async deleteOrgById(_id: MongooseSchema.Types.ObjectId) {
        return await this.orgModel
            .findOneAndDelete(_id)
            .exec();
    }
}
