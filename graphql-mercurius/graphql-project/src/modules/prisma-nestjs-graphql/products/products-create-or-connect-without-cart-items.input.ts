import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { productsWhereUniqueInput } from './products-where-unique.input';
import { Type } from 'class-transformer';
import { productsCreateWithoutCart_itemsInput } from './products-create-without-cart-items.input';

@InputType()
export class productsCreateOrConnectWithoutCart_itemsInput {

    @Field(() => productsWhereUniqueInput, {nullable:false})
    @Type(() => productsWhereUniqueInput)
    where!: Prisma.AtLeast<productsWhereUniqueInput, 'id'>;

    @Field(() => productsCreateWithoutCart_itemsInput, {nullable:false})
    @Type(() => productsCreateWithoutCart_itemsInput)
    create!: productsCreateWithoutCart_itemsInput;
}
