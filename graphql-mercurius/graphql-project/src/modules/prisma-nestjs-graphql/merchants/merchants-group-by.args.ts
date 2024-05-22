import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { merchantsWhereInput } from './merchants-where.input';
import { Type } from 'class-transformer';
import { merchantsOrderByWithAggregationInput } from './merchants-order-by-with-aggregation.input';
import { MerchantsScalarFieldEnum } from '../prisma/merchants-scalar-field.enum';
import { merchantsScalarWhereWithAggregatesInput } from './merchants-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class merchantsGroupByArgs {

    @Field(() => merchantsWhereInput, {nullable:true})
    @Type(() => merchantsWhereInput)
    where?: merchantsWhereInput;

    @Field(() => [merchantsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<merchantsOrderByWithAggregationInput>;

    @Field(() => [MerchantsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MerchantsScalarFieldEnum>;

    @Field(() => merchantsScalarWhereWithAggregatesInput, {nullable:true})
    having?: merchantsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
