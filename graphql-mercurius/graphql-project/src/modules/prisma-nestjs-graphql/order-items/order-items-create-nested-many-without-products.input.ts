import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_itemsCreateWithoutProductsInput } from './order-items-create-without-products.input';
import { Type } from 'class-transformer';
import { order_itemsCreateOrConnectWithoutProductsInput } from './order-items-create-or-connect-without-products.input';
import { order_itemsCreateManyProductsInputEnvelope } from './order-items-create-many-products-input-envelope.input';
import { Prisma } from '@prisma/client';
import { order_itemsWhereUniqueInput } from './order-items-where-unique.input';

@InputType()
export class order_itemsCreateNestedManyWithoutProductsInput {

    @Field(() => [order_itemsCreateWithoutProductsInput], {nullable:true})
    @Type(() => order_itemsCreateWithoutProductsInput)
    create?: Array<order_itemsCreateWithoutProductsInput>;

    @Field(() => [order_itemsCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => order_itemsCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<order_itemsCreateOrConnectWithoutProductsInput>;

    @Field(() => order_itemsCreateManyProductsInputEnvelope, {nullable:true})
    @Type(() => order_itemsCreateManyProductsInputEnvelope)
    createMany?: order_itemsCreateManyProductsInputEnvelope;

    @Field(() => [order_itemsWhereUniqueInput], {nullable:true})
    @Type(() => order_itemsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<order_itemsWhereUniqueInput, 'order_id_product_id'>>;
}
