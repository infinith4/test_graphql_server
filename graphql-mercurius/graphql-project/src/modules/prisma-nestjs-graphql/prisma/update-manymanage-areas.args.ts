import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manage_areasUpdateManyMutationInput } from '../manage-areas/manage-areas-update-many-mutation.input';
import { Type } from 'class-transformer';
import { manage_areasWhereInput } from '../manage-areas/manage-areas-where.input';

@ArgsType()
export class UpdateManymanageAreasArgs {

    @Field(() => manage_areasUpdateManyMutationInput, {nullable:false})
    @Type(() => manage_areasUpdateManyMutationInput)
    data!: manage_areasUpdateManyMutationInput;

    @Field(() => manage_areasWhereInput, {nullable:true})
    @Type(() => manage_areasWhereInput)
    where?: manage_areasWhereInput;
}
