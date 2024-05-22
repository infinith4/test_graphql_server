import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manage_areasWhereInput } from '../manage-areas/manage-areas-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymanageAreasArgs {

    @Field(() => manage_areasWhereInput, {nullable:true})
    @Type(() => manage_areasWhereInput)
    where?: manage_areasWhereInput;
}
