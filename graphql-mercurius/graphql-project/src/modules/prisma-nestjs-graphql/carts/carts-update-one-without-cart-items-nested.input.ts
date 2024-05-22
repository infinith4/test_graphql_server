import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cartsCreateWithoutCart_itemsInput } from './carts-create-without-cart-items.input';
import { Type } from 'class-transformer';
import { cartsCreateOrConnectWithoutCart_itemsInput } from './carts-create-or-connect-without-cart-items.input';
import { cartsUpsertWithoutCart_itemsInput } from './carts-upsert-without-cart-items.input';
import { cartsWhereInput } from './carts-where.input';
import { Prisma } from '@prisma/client';
import { cartsWhereUniqueInput } from './carts-where-unique.input';
import { cartsUpdateToOneWithWhereWithoutCart_itemsInput } from './carts-update-to-one-with-where-without-cart-items.input';

@InputType()
export class cartsUpdateOneWithoutCart_itemsNestedInput {

    @Field(() => cartsCreateWithoutCart_itemsInput, {nullable:true})
    @Type(() => cartsCreateWithoutCart_itemsInput)
    create?: cartsCreateWithoutCart_itemsInput;

    @Field(() => cartsCreateOrConnectWithoutCart_itemsInput, {nullable:true})
    @Type(() => cartsCreateOrConnectWithoutCart_itemsInput)
    connectOrCreate?: cartsCreateOrConnectWithoutCart_itemsInput;

    @Field(() => cartsUpsertWithoutCart_itemsInput, {nullable:true})
    @Type(() => cartsUpsertWithoutCart_itemsInput)
    upsert?: cartsUpsertWithoutCart_itemsInput;

    @Field(() => cartsWhereInput, {nullable:true})
    @Type(() => cartsWhereInput)
    disconnect?: cartsWhereInput;

    @Field(() => cartsWhereInput, {nullable:true})
    @Type(() => cartsWhereInput)
    delete?: cartsWhereInput;

    @Field(() => cartsWhereUniqueInput, {nullable:true})
    @Type(() => cartsWhereUniqueInput)
    connect?: Prisma.AtLeast<cartsWhereUniqueInput, 'id'>;

    @Field(() => cartsUpdateToOneWithWhereWithoutCart_itemsInput, {nullable:true})
    @Type(() => cartsUpdateToOneWithWhereWithoutCart_itemsInput)
    update?: cartsUpdateToOneWithWhereWithoutCart_itemsInput;
}
