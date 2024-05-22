import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { productsWhereUniqueInput } from './products-where-unique.input';
import { Type } from 'class-transformer';
import { productsCreateWithoutOrder_itemsInput } from './products-create-without-order-items.input';

@InputType()
export class productsCreateOrConnectWithoutOrder_itemsInput {

    @Field(() => productsWhereUniqueInput, {nullable:false})
    @Type(() => productsWhereUniqueInput)
    where!: Prisma.AtLeast<productsWhereUniqueInput, 'id'>;

    @Field(() => productsCreateWithoutOrder_itemsInput, {nullable:false})
    @Type(() => productsCreateWithoutOrder_itemsInput)
    create!: productsCreateWithoutOrder_itemsInput;
}
