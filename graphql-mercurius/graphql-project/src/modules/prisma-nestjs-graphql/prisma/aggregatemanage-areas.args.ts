import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manage_areasWhereInput } from '../manage-areas/manage-areas-where.input';
import { Type } from 'class-transformer';
import { manage_areasOrderByWithRelationInput } from '../manage-areas/manage-areas-order-by-with-relation.input';
import { manage_areasWhereUniqueInput } from '../manage-areas/manage-areas-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatemanageAreasArgs {

    @Field(() => manage_areasWhereInput, {nullable:true})
    @Type(() => manage_areasWhereInput)
    where?: manage_areasWhereInput;

    @Field(() => [manage_areasOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<manage_areasOrderByWithRelationInput>;

    @Field(() => manage_areasWhereUniqueInput, {nullable:true})
    cursor?: manage_areasWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
