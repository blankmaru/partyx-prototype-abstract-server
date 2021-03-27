import { OrganizationModel } from "./models/organization.model";
import { OrganizationService } from "./organization.service";
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Schema as MongooseSchema } from 'mongoose'
import { CreateOrgInput, UpdateOrgInput } from "./organization.input";

@Resolver(() => OrganizationModel)
export class OrganizationResolver {
    constructor(
        private readonly orgService: OrganizationService
    ) { }

    @Query(() => [OrganizationModel])
   async events() {
      const res = await this.orgService.getAll();
      return res;
   }

    @Query(() => OrganizationModel)
    async org(
        @Args('_id', { type: () => String })
        _id: MongooseSchema.Types.ObjectId
    ) {
        return this.orgService.getOrgById(_id);
    }

    @Mutation(() => OrganizationModel)
    async createOrg(
        @Args('payload') payload: CreateOrgInput
    ) {
        return this.orgService.createOrg(payload);
    }

    @Mutation(() => OrganizationModel)
    async updateOrg(
        @Args('payload') payload: UpdateOrgInput
    ) {
        return this.orgService.updateOrg(payload);
    }

    @Mutation(() => OrganizationModel)
    async deleteOrg(
        @Args('_id', { type: () => String })
        _id: MongooseSchema.Types.ObjectId,
    ) {
        return this.orgService.deleteOrgById(_id);
    }
}