import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manage_areasWhereUniqueInput } from '../manage-areas/manage-areas-where-unique.input';
import { Type } from 'class-transformer';
import { manage_areasCreateInput } from '../manage-areas/manage-areas-create.input';
import { manage_areasUpdateInput } from '../manage-areas/manage-areas-update.input';

@ArgsType()
export class UpsertOnemanageAreasArgs {

    @Field(() => manage_areasWhereUniqueInput, {nullable:false})
    @Type(() => manage_areasWhereUniqueInput)
    where!: manage_areasWhereUniqueInput;

    @Field(() => manage_areasCreateInput, {nullable:false})
    @Type(() => manage_areasCreateInput)
    create!: manage_areasCreateInput;

    @Field(() => manage_areasUpdateInput, {nullable:false})
    @Type(() => manage_areasUpdateInput)
    update!: manage_areasUpdateInput;
}
