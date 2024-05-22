import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { cart_itemsWhereUniqueInput } from './cart-items-where-unique.input';
import { Type } from 'class-transformer';
import { cart_itemsUpdateWithoutCartsInput } from './cart-items-update-without-carts.input';
import { cart_itemsCreateWithoutCartsInput } from './cart-items-create-without-carts.input';

@InputType()
export class cart_itemsUpsertWithWhereUniqueWithoutCartsInput {

    @Field(() => cart_itemsWhereUniqueInput, {nullable:false})
    @Type(() => cart_itemsWhereUniqueInput)
    where!: Prisma.AtLeast<cart_itemsWhereUniqueInput, 'id'>;

    @Field(() => cart_itemsUpdateWithoutCartsInput, {nullable:false})
    @Type(() => cart_itemsUpdateWithoutCartsInput)
    update!: cart_itemsUpdateWithoutCartsInput;

    @Field(() => cart_itemsCreateWithoutCartsInput, {nullable:false})
    @Type(() => cart_itemsCreateWithoutCartsInput)
    create!: cart_itemsCreateWithoutCartsInput;
}
