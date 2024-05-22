import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { order_itemsWhereUniqueInput } from './order-items-where-unique.input';
import { Type } from 'class-transformer';
import { order_itemsUpdateWithoutProductsInput } from './order-items-update-without-products.input';

@InputType()
export class order_itemsUpdateWithWhereUniqueWithoutProductsInput {

    @Field(() => order_itemsWhereUniqueInput, {nullable:false})
    @Type(() => order_itemsWhereUniqueInput)
    where!: Prisma.AtLeast<order_itemsWhereUniqueInput, 'order_id_product_id'>;

    @Field(() => order_itemsUpdateWithoutProductsInput, {nullable:false})
    @Type(() => order_itemsUpdateWithoutProductsInput)
    data!: order_itemsUpdateWithoutProductsInput;
}
