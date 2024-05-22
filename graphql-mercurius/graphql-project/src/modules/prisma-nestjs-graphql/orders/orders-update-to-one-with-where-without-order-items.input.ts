import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereInput } from './orders-where.input';
import { Type } from 'class-transformer';
import { ordersUpdateWithoutOrder_itemsInput } from './orders-update-without-order-items.input';

@InputType()
export class ordersUpdateToOneWithWhereWithoutOrder_itemsInput {

    @Field(() => ordersWhereInput, {nullable:true})
    @Type(() => ordersWhereInput)
    where?: ordersWhereInput;

    @Field(() => ordersUpdateWithoutOrder_itemsInput, {nullable:false})
    @Type(() => ordersUpdateWithoutOrder_itemsInput)
    data!: ordersUpdateWithoutOrder_itemsInput;
}
