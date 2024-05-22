import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsCreateWithoutCart_itemsInput } from './products-create-without-cart-items.input';
import { Type } from 'class-transformer';
import { productsCreateOrConnectWithoutCart_itemsInput } from './products-create-or-connect-without-cart-items.input';
import { Prisma } from '@prisma/client';
import { productsWhereUniqueInput } from './products-where-unique.input';

@InputType()
export class productsCreateNestedOneWithoutCart_itemsInput {

    @Field(() => productsCreateWithoutCart_itemsInput, {nullable:true})
    @Type(() => productsCreateWithoutCart_itemsInput)
    create?: productsCreateWithoutCart_itemsInput;

    @Field(() => productsCreateOrConnectWithoutCart_itemsInput, {nullable:true})
    @Type(() => productsCreateOrConnectWithoutCart_itemsInput)
    connectOrCreate?: productsCreateOrConnectWithoutCart_itemsInput;

    @Field(() => productsWhereUniqueInput, {nullable:true})
    @Type(() => productsWhereUniqueInput)
    connect?: Prisma.AtLeast<productsWhereUniqueInput, 'id'>;
}
