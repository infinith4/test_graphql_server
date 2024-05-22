import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { order_itemsWhereUniqueInput } from './order-items-where-unique.input';
import { Type } from 'class-transformer';
import { order_itemsCreateWithoutOrdersInput } from './order-items-create-without-orders.input';

@InputType()
export class order_itemsCreateOrConnectWithoutOrdersInput {

    @Field(() => order_itemsWhereUniqueInput, {nullable:false})
    @Type(() => order_itemsWhereUniqueInput)
    where!: Prisma.AtLeast<order_itemsWhereUniqueInput, 'order_id_product_id'>;

    @Field(() => order_itemsCreateWithoutOrdersInput, {nullable:false})
    @Type(() => order_itemsCreateWithoutOrdersInput)
    create!: order_itemsCreateWithoutOrdersInput;
}
