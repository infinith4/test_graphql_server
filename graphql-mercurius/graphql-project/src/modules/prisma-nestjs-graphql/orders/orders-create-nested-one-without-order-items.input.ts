import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutOrder_itemsInput } from './orders-create-without-order-items.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutOrder_itemsInput } from './orders-create-or-connect-without-order-items.input';
import { Prisma } from '@prisma/client';
import { ordersWhereUniqueInput } from './orders-where-unique.input';

@InputType()
export class ordersCreateNestedOneWithoutOrder_itemsInput {

    @Field(() => ordersCreateWithoutOrder_itemsInput, {nullable:true})
    @Type(() => ordersCreateWithoutOrder_itemsInput)
    create?: ordersCreateWithoutOrder_itemsInput;

    @Field(() => ordersCreateOrConnectWithoutOrder_itemsInput, {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutOrder_itemsInput)
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput;

    @Field(() => ordersWhereUniqueInput, {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    connect?: Prisma.AtLeast<ordersWhereUniqueInput, 'id'>;
}
