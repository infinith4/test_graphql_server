import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manage_areasUpdateInput } from '../manage-areas/manage-areas-update.input';
import { Type } from 'class-transformer';
import { manage_areasWhereUniqueInput } from '../manage-areas/manage-areas-where-unique.input';

@ArgsType()
export class UpdateOnemanageAreasArgs {

    @Field(() => manage_areasUpdateInput, {nullable:false})
    @Type(() => manage_areasUpdateInput)
    data!: manage_areasUpdateInput;

    @Field(() => manage_areasWhereUniqueInput, {nullable:false})
    @Type(() => manage_areasWhereUniqueInput)
    where!: manage_areasWhereUniqueInput;
}
