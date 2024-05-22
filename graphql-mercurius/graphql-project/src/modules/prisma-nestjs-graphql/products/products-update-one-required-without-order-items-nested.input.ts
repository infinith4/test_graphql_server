import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsCreateWithoutOrder_itemsInput } from './products-create-without-order-items.input';
import { Type } from 'class-transformer';
import { productsCreateOrConnectWithoutOrder_itemsInput } from './products-create-or-connect-without-order-items.input';
import { productsUpsertWithoutOrder_itemsInput } from './products-upsert-without-order-items.input';
import { Prisma } from '@prisma/client';
import { productsWhereUniqueInput } from './products-where-unique.input';
import { productsUpdateToOneWithWhereWithoutOrder_itemsInput } from './products-update-to-one-with-where-without-order-items.input';

@InputType()
export class productsUpdateOneRequiredWithoutOrder_itemsNestedInput {

    @Field(() => productsCreateWithoutOrder_itemsInput, {nullable:true})
    @Type(() => productsCreateWithoutOrder_itemsInput)
    create?: productsCreateWithoutOrder_itemsInput;

    @Field(() => productsCreateOrConnectWithoutOrder_itemsInput, {nullable:true})
    @Type(() => productsCreateOrConnectWithoutOrder_itemsInput)
    connectOrCreate?: productsCreateOrConnectWithoutOrder_itemsInput;

    @Field(() => productsUpsertWithoutOrder_itemsInput, {nullable:true})
    @Type(() => productsUpsertWithoutOrder_itemsInput)
    upsert?: productsUpsertWithoutOrder_itemsInput;

    @Field(() => productsWhereUniqueInput, {nullable:true})
    @Type(() => productsWhereUniqueInput)
    connect?: Prisma.AtLeast<productsWhereUniqueInput, 'id'>;

    @Field(() => productsUpdateToOneWithWhereWithoutOrder_itemsInput, {nullable:true})
    @Type(() => productsUpdateToOneWithWhereWithoutOrder_itemsInput)
    update?: productsUpdateToOneWithWhereWithoutOrder_itemsInput;
}
