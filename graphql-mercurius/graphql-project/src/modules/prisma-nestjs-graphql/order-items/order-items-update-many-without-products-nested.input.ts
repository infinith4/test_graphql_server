import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_itemsCreateWithoutProductsInput } from './order-items-create-without-products.input';
import { Type } from 'class-transformer';
import { order_itemsCreateOrConnectWithoutProductsInput } from './order-items-create-or-connect-without-products.input';
import { order_itemsUpsertWithWhereUniqueWithoutProductsInput } from './order-items-upsert-with-where-unique-without-products.input';
import { order_itemsCreateManyProductsInputEnvelope } from './order-items-create-many-products-input-envelope.input';
import { Prisma } from '@prisma/client';
import { order_itemsWhereUniqueInput } from './order-items-where-unique.input';
import { order_itemsUpdateWithWhereUniqueWithoutProductsInput } from './order-items-update-with-where-unique-without-products.input';
import { order_itemsUpdateManyWithWhereWithoutProductsInput } from './order-items-update-many-with-where-without-products.input';
import { order_itemsScalarWhereInput } from './order-items-scalar-where.input';

@InputType()
export class order_itemsUpdateManyWithoutProductsNestedInput {

    @Field(() => [order_itemsCreateWithoutProductsInput], {nullable:true})
    @Type(() => order_itemsCreateWithoutProductsInput)
    create?: Array<order_itemsCreateWithoutProductsInput>;

    @Field(() => [order_itemsCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => order_itemsCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<order_itemsCreateOrConnectWithoutProductsInput>;

    @Field(() => [order_itemsUpsertWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => order_itemsUpsertWithWhereUniqueWithoutProductsInput)
    upsert?: Array<order_itemsUpsertWithWhereUniqueWithoutProductsInput>;

    @Field(() => order_itemsCreateManyProductsInputEnvelope, {nullable:true})
    @Type(() => order_itemsCreateManyProductsInputEnvelope)
    createMany?: order_itemsCreateManyProductsInputEnvelope;

    @Field(() => [order_itemsWhereUniqueInput], {nullable:true})
    @Type(() => order_itemsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<order_itemsWhereUniqueInput, 'order_id_product_id'>>;

    @Field(() => [order_itemsWhereUniqueInput], {nullable:true})
    @Type(() => order_itemsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<order_itemsWhereUniqueInput, 'order_id_product_id'>>;

    @Field(() => [order_itemsWhereUniqueInput], {nullable:true})
    @Type(() => order_itemsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<order_itemsWhereUniqueInput, 'order_id_product_id'>>;

    @Field(() => [order_itemsWhereUniqueInput], {nullable:true})
    @Type(() => order_itemsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<order_itemsWhereUniqueInput, 'order_id_product_id'>>;

    @Field(() => [order_itemsUpdateWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => order_itemsUpdateWithWhereUniqueWithoutProductsInput)
    update?: Array<order_itemsUpdateWithWhereUniqueWithoutProductsInput>;

    @Field(() => [order_itemsUpdateManyWithWhereWithoutProductsInput], {nullable:true})
    @Type(() => order_itemsUpdateManyWithWhereWithoutProductsInput)
    updateMany?: Array<order_itemsUpdateManyWithWhereWithoutProductsInput>;

    @Field(() => [order_itemsScalarWhereInput], {nullable:true})
    @Type(() => order_itemsScalarWhereInput)
    deleteMany?: Array<order_itemsScalarWhereInput>;
}
