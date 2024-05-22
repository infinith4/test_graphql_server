import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersCreateWithoutOrder_itemsInput } from './orders-create-without-order-items.input';

@InputType()
export class ordersCreateOrConnectWithoutOrder_itemsInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: Prisma.AtLeast<ordersWhereUniqueInput, 'id'>;

    @Field(() => ordersCreateWithoutOrder_itemsInput, {nullable:false})
    @Type(() => ordersCreateWithoutOrder_itemsInput)
    create!: ordersCreateWithoutOrder_itemsInput;
}
