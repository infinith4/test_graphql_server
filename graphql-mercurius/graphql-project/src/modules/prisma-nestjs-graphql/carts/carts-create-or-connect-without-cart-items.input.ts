import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { cartsWhereUniqueInput } from './carts-where-unique.input';
import { Type } from 'class-transformer';
import { cartsCreateWithoutCart_itemsInput } from './carts-create-without-cart-items.input';

@InputType()
export class cartsCreateOrConnectWithoutCart_itemsInput {

    @Field(() => cartsWhereUniqueInput, {nullable:false})
    @Type(() => cartsWhereUniqueInput)
    where!: Prisma.AtLeast<cartsWhereUniqueInput, 'id'>;

    @Field(() => cartsCreateWithoutCart_itemsInput, {nullable:false})
    @Type(() => cartsCreateWithoutCart_itemsInput)
    create!: cartsCreateWithoutCart_itemsInput;
}
