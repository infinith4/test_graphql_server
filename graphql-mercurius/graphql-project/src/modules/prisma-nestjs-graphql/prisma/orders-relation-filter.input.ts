import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereInput } from '../orders/orders-where.input';
import { Type } from 'class-transformer';

@InputType()
export class OrdersRelationFilter {

    @Field(() => ordersWhereInput, {nullable:true})
    @Type(() => ordersWhereInput)
    is?: ordersWhereInput;

    @Field(() => ordersWhereInput, {nullable:true})
    @Type(() => ordersWhereInput)
    isNot?: ordersWhereInput;
}
