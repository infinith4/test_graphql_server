import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { cart_itemsWhereUniqueInput } from './cart-items-where-unique.input';
import { Type } from 'class-transformer';
import { cart_itemsCreateWithoutCartsInput } from './cart-items-create-without-carts.input';

@InputType()
export class cart_itemsCreateOrConnectWithoutCartsInput {

    @Field(() => cart_itemsWhereUniqueInput, {nullable:false})
    @Type(() => cart_itemsWhereUniqueInput)
    where!: Prisma.AtLeast<cart_itemsWhereUniqueInput, 'id'>;

    @Field(() => cart_itemsCreateWithoutCartsInput, {nullable:false})
    @Type(() => cart_itemsCreateWithoutCartsInput)
    create!: cart_itemsCreateWithoutCartsInput;
}
