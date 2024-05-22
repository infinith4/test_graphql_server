import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manage_areasWhereUniqueInput } from '../manage-areas/manage-areas-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquemanageAreasOrThrowArgs {

    @Field(() => manage_areasWhereUniqueInput, {nullable:false})
    @Type(() => manage_areasWhereUniqueInput)
    where!: manage_areasWhereUniqueInput;
}
