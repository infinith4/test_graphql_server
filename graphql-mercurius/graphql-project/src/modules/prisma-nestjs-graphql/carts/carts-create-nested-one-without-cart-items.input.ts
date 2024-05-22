import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cartsCreateWithoutCart_itemsInput } from './carts-create-without-cart-items.input';
import { Type } from 'class-transformer';
import { cartsCreateOrConnectWithoutCart_itemsInput } from './carts-create-or-connect-without-cart-items.input';
import { Prisma } from '@prisma/client';
import { cartsWhereUniqueInput } from './carts-where-unique.input';

@InputType()
export class cartsCreateNestedOneWithoutCart_itemsInput {

    @Field(() => cartsCreateWithoutCart_itemsInput, {nullable:true})
    @Type(() => cartsCreateWithoutCart_itemsInput)
    create?: cartsCreateWithoutCart_itemsInput;

    @Field(() => cartsCreateOrConnectWithoutCart_itemsInput, {nullable:true})
    @Type(() => cartsCreateOrConnectWithoutCart_itemsInput)
    connectOrCreate?: cartsCreateOrConnectWithoutCart_itemsInput;

    @Field(() => cartsWhereUniqueInput, {nullable:true})
    @Type(() => cartsWhereUniqueInput)
    connect?: Prisma.AtLeast<cartsWhereUniqueInput, 'id'>;
}
