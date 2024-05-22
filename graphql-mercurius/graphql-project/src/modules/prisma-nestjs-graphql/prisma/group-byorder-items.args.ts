import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_itemsWhereInput } from '../order-items/order-items-where.input';
import { Type } from 'class-transformer';
import { order_itemsOrderByWithAggregationInput } from '../order-items/order-items-order-by-with-aggregation.input';
import { Order_itemsScalarFieldEnum } from './order-items-scalar-field.enum';
import { order_itemsScalarWhereWithAggregatesInput } from '../order-items/order-items-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByorderItemsArgs {

    @Field(() => order_itemsWhereInput, {nullable:true})
    @Type(() => order_itemsWhereInput)
    where?: order_itemsWhereInput;

    @Field(() => [order_itemsOrderByWithAggregationInput], {nullable:true})
    @Type(() => order_itemsOrderByWithAggregationInput)
    orderBy?: Array<order_itemsOrderByWithAggregationInput>;

    @Field(() => [Order_itemsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Order_itemsScalarFieldEnum>;

    @Field(() => order_itemsScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => order_itemsScalarWhereWithAggregatesInput)
    having?: order_itemsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
