import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { order_itemsWhereUniqueInput } from './order-items-where-unique.input';
import { Type } from 'class-transformer';
import { order_itemsCreateWithoutProductsInput } from './order-items-create-without-products.input';

@InputType()
export class order_itemsCreateOrConnectWithoutProductsInput {

    @Field(() => order_itemsWhereUniqueInput, {nullable:false})
    @Type(() => order_itemsWhereUniqueInput)
    where!: Prisma.AtLeast<order_itemsWhereUniqueInput, 'order_id_product_id'>;

    @Field(() => order_itemsCreateWithoutProductsInput, {nullable:false})
    @Type(() => order_itemsCreateWithoutProductsInput)
    create!: order_itemsCreateWithoutProductsInput;
}
