import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { cart_itemsWhereInput } from '../cart-items/cart-items-where.input';
import { Type } from 'class-transformer';
import { cart_itemsOrderByWithAggregationInput } from '../cart-items/cart-items-order-by-with-aggregation.input';
import { Cart_itemsScalarFieldEnum } from './cart-items-scalar-field.enum';
import { cart_itemsScalarWhereWithAggregatesInput } from '../cart-items/cart-items-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBycartItemsArgs {

    @Field(() => cart_itemsWhereInput, {nullable:true})
    @Type(() => cart_itemsWhereInput)
    where?: cart_itemsWhereInput;

    @Field(() => [cart_itemsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<cart_itemsOrderByWithAggregationInput>;

    @Field(() => [Cart_itemsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Cart_itemsScalarFieldEnum>;

    @Field(() => cart_itemsScalarWhereWithAggregatesInput, {nullable:true})
    having?: cart_itemsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
