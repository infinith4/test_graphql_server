import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { cart_itemsWhereUniqueInput } from './cart-items-where-unique.input';
import { Type } from 'class-transformer';
import { cart_itemsUpdateWithoutProductsInput } from './cart-items-update-without-products.input';

@InputType()
export class cart_itemsUpdateWithWhereUniqueWithoutProductsInput {

    @Field(() => cart_itemsWhereUniqueInput, {nullable:false})
    @Type(() => cart_itemsWhereUniqueInput)
    where!: Prisma.AtLeast<cart_itemsWhereUniqueInput, 'id'>;

    @Field(() => cart_itemsUpdateWithoutProductsInput, {nullable:false})
    @Type(() => cart_itemsUpdateWithoutProductsInput)
    data!: cart_itemsUpdateWithoutProductsInput;
}
