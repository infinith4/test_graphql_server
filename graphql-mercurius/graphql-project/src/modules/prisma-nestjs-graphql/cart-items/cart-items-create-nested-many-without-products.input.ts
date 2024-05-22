import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cart_itemsCreateWithoutProductsInput } from './cart-items-create-without-products.input';
import { Type } from 'class-transformer';
import { cart_itemsCreateOrConnectWithoutProductsInput } from './cart-items-create-or-connect-without-products.input';
import { cart_itemsCreateManyProductsInputEnvelope } from './cart-items-create-many-products-input-envelope.input';
import { Prisma } from '@prisma/client';
import { cart_itemsWhereUniqueInput } from './cart-items-where-unique.input';

@InputType()
export class cart_itemsCreateNestedManyWithoutProductsInput {

    @Field(() => [cart_itemsCreateWithoutProductsInput], {nullable:true})
    @Type(() => cart_itemsCreateWithoutProductsInput)
    create?: Array<cart_itemsCreateWithoutProductsInput>;

    @Field(() => [cart_itemsCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => cart_itemsCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<cart_itemsCreateOrConnectWithoutProductsInput>;

    @Field(() => cart_itemsCreateManyProductsInputEnvelope, {nullable:true})
    @Type(() => cart_itemsCreateManyProductsInputEnvelope)
    createMany?: cart_itemsCreateManyProductsInputEnvelope;

    @Field(() => [cart_itemsWhereUniqueInput], {nullable:true})
    @Type(() => cart_itemsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<cart_itemsWhereUniqueInput, 'id'>>;
}
