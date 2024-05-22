import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereInput } from '../orders/orders-where.input';
import { Type } from 'class-transformer';

@InputType()
export class OrdersListRelationFilter {

    @Field(() => ordersWhereInput, {nullable:true})
    @Type(() => ordersWhereInput)
    every?: ordersWhereInput;

    @Field(() => ordersWhereInput, {nullable:true})
    @Type(() => ordersWhereInput)
    some?: ordersWhereInput;

    @Field(() => ordersWhereInput, {nullable:true})
    @Type(() => ordersWhereInput)
    none?: ordersWhereInput;
}
