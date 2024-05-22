import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manage_areasWhereInput } from '../manage-areas/manage-areas-where.input';
import { Type } from 'class-transformer';
import { manage_areasOrderByWithAggregationInput } from '../manage-areas/manage-areas-order-by-with-aggregation.input';
import { Manage_areasScalarFieldEnum } from './manage-areas-scalar-field.enum';
import { manage_areasScalarWhereWithAggregatesInput } from '../manage-areas/manage-areas-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymanageAreasArgs {

    @Field(() => manage_areasWhereInput, {nullable:true})
    @Type(() => manage_areasWhereInput)
    where?: manage_areasWhereInput;

    @Field(() => [manage_areasOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<manage_areasOrderByWithAggregationInput>;

    @Field(() => [Manage_areasScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Manage_areasScalarFieldEnum>;

    @Field(() => manage_areasScalarWhereWithAggregatesInput, {nullable:true})
    having?: manage_areasScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
