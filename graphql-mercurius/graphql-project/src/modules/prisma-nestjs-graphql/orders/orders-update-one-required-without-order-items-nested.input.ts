import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutOrder_itemsInput } from './orders-create-without-order-items.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutOrder_itemsInput } from './orders-create-or-connect-without-order-items.input';
import { ordersUpsertWithoutOrder_itemsInput } from './orders-upsert-without-order-items.input';
import { Prisma } from '@prisma/client';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { ordersUpdateToOneWithWhereWithoutOrder_itemsInput } from './orders-update-to-one-with-where-without-order-items.input';

@InputType()
export class ordersUpdateOneRequiredWithoutOrder_itemsNestedInput {

    @Field(() => ordersCreateWithoutOrder_itemsInput, {nullable:true})
    @Type(() => ordersCreateWithoutOrder_itemsInput)
    create?: ordersCreateWithoutOrder_itemsInput;

    @Field(() => ordersCreateOrConnectWithoutOrder_itemsInput, {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutOrder_itemsInput)
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput;

    @Field(() => ordersUpsertWithoutOrder_itemsInput, {nullable:true})
    @Type(() => ordersUpsertWithoutOrder_itemsInput)
    upsert?: ordersUpsertWithoutOrder_itemsInput;

    @Field(() => ordersWhereUniqueInput, {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    connect?: Prisma.AtLeast<ordersWhereUniqueInput, 'id'>;

    @Field(() => ordersUpdateToOneWithWhereWithoutOrder_itemsInput, {nullable:true})
    @Type(() => ordersUpdateToOneWithWhereWithoutOrder_itemsInput)
    update?: ordersUpdateToOneWithWhereWithoutOrder_itemsInput;
}
