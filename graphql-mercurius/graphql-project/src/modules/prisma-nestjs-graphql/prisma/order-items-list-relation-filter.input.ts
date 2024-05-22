import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_itemsWhereInput } from '../order-items/order-items-where.input';
import { Type } from 'class-transformer';

@InputType()
export class Order_itemsListRelationFilter {

    @Field(() => order_itemsWhereInput, {nullable:true})
    @Type(() => order_itemsWhereInput)
    every?: order_itemsWhereInput;

    @Field(() => order_itemsWhereInput, {nullable:true})
    @Type(() => order_itemsWhereInput)
    some?: order_itemsWhereInput;

    @Field(() => order_itemsWhereInput, {nullable:true})
    @Type(() => order_itemsWhereInput)
    none?: order_itemsWhereInput;
}
