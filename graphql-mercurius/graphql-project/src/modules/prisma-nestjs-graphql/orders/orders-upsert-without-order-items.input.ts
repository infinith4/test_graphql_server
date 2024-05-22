import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersUpdateWithoutOrder_itemsInput } from './orders-update-without-order-items.input';
import { Type } from 'class-transformer';
import { ordersCreateWithoutOrder_itemsInput } from './orders-create-without-order-items.input';
import { ordersWhereInput } from './orders-where.input';

@InputType()
export class ordersUpsertWithoutOrder_itemsInput {

    @Field(() => ordersUpdateWithoutOrder_itemsInput, {nullable:false})
    @Type(() => ordersUpdateWithoutOrder_itemsInput)
    update!: ordersUpdateWithoutOrder_itemsInput;

    @Field(() => ordersCreateWithoutOrder_itemsInput, {nullable:false})
    @Type(() => ordersCreateWithoutOrder_itemsInput)
    create!: ordersCreateWithoutOrder_itemsInput;

    @Field(() => ordersWhereInput, {nullable:true})
    @Type(() => ordersWhereInput)
    where?: ordersWhereInput;
}
