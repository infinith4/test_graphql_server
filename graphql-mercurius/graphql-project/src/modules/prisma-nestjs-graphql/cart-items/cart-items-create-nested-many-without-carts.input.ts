import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cart_itemsCreateWithoutCartsInput } from './cart-items-create-without-carts.input';
import { Type } from 'class-transformer';
import { cart_itemsCreateOrConnectWithoutCartsInput } from './cart-items-create-or-connect-without-carts.input';
import { cart_itemsCreateManyCartsInputEnvelope } from './cart-items-create-many-carts-input-envelope.input';
import { Prisma } from '@prisma/client';
import { cart_itemsWhereUniqueInput } from './cart-items-where-unique.input';

@InputType()
export class cart_itemsCreateNestedManyWithoutCartsInput {

    @Field(() => [cart_itemsCreateWithoutCartsInput], {nullable:true})
    @Type(() => cart_itemsCreateWithoutCartsInput)
    create?: Array<cart_itemsCreateWithoutCartsInput>;

    @Field(() => [cart_itemsCreateOrConnectWithoutCartsInput], {nullable:true})
    @Type(() => cart_itemsCreateOrConnectWithoutCartsInput)
    connectOrCreate?: Array<cart_itemsCreateOrConnectWithoutCartsInput>;

    @Field(() => cart_itemsCreateManyCartsInputEnvelope, {nullable:true})
    @Type(() => cart_itemsCreateManyCartsInputEnvelope)
    createMany?: cart_itemsCreateManyCartsInputEnvelope;

    @Field(() => [cart_itemsWhereUniqueInput], {nullable:true})
    @Type(() => cart_itemsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<cart_itemsWhereUniqueInput, 'id'>>;
}
