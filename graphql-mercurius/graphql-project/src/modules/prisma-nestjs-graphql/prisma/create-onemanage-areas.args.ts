import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manage_areasCreateInput } from '../manage-areas/manage-areas-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemanageAreasArgs {

    @Field(() => manage_areasCreateInput, {nullable:false})
    @Type(() => manage_areasCreateInput)
    data!: manage_areasCreateInput;
}
