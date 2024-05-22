import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsCreateWithoutCart_itemsInput } from './products-create-without-cart-items.input';
import { Type } from 'class-transformer';
import { productsCreateOrConnectWithoutCart_itemsInput } from './products-create-or-connect-without-cart-items.input';
import { productsUpsertWithoutCart_itemsInput } from './products-upsert-without-cart-items.input';
import { productsWhereInput } from './products-where.input';
import { Prisma } from '@prisma/client';
import { productsWhereUniqueInput } from './products-where-unique.input';
import { productsUpdateToOneWithWhereWithoutCart_itemsInput } from './products-update-to-one-with-where-without-cart-items.input';

@InputType()
export class productsUpdateOneWithoutCart_itemsNestedInput {

    @Field(() => productsCreateWithoutCart_itemsInput, {nullable:true})
    @Type(() => productsCreateWithoutCart_itemsInput)
    create?: productsCreateWithoutCart_itemsInput;

    @Field(() => productsCreateOrConnectWithoutCart_itemsInput, {nullable:true})
    @Type(() => productsCreateOrConnectWithoutCart_itemsInput)
    connectOrCreate?: productsCreateOrConnectWithoutCart_itemsInput;

    @Field(() => productsUpsertWithoutCart_itemsInput, {nullable:true})
    @Type(() => productsUpsertWithoutCart_itemsInput)
    upsert?: productsUpsertWithoutCart_itemsInput;

    @Field(() => productsWhereInput, {nullable:true})
    @Type(() => productsWhereInput)
    disconnect?: productsWhereInput;

    @Field(() => productsWhereInput, {nullable:true})
    @Type(() => productsWhereInput)
    delete?: productsWhereInput;

    @Field(() => productsWhereUniqueInput, {nullable:true})
    @Type(() => productsWhereUniqueInput)
    connect?: Prisma.AtLeast<productsWhereUniqueInput, 'id'>;

    @Field(() => productsUpdateToOneWithWhereWithoutCart_itemsInput, {nullable:true})
    @Type(() => productsUpdateToOneWithWhereWithoutCart_itemsInput)
    update?: productsUpdateToOneWithWhereWithoutCart_itemsInput;
}
