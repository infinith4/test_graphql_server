import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cart_itemsCreateWithoutProductsInput } from './cart-items-create-without-products.input';
import { Type } from 'class-transformer';
import { cart_itemsCreateOrConnectWithoutProductsInput } from './cart-items-create-or-connect-without-products.input';
import { cart_itemsUpsertWithWhereUniqueWithoutProductsInput } from './cart-items-upsert-with-where-unique-without-products.input';
import { cart_itemsCreateManyProductsInputEnvelope } from './cart-items-create-many-products-input-envelope.input';
import { Prisma } from '@prisma/client';
import { cart_itemsWhereUniqueInput } from './cart-items-where-unique.input';
import { cart_itemsUpdateWithWhereUniqueWithoutProductsInput } from './cart-items-update-with-where-unique-without-products.input';
import { cart_itemsUpdateManyWithWhereWithoutProductsInput } from './cart-items-update-many-with-where-without-products.input';
import { cart_itemsScalarWhereInput } from './cart-items-scalar-where.input';

@InputType()
export class cart_itemsUpdateManyWithoutProductsNestedInput {

    @Field(() => [cart_itemsCreateWithoutProductsInput], {nullable:true})
    @Type(() => cart_itemsCreateWithoutProductsInput)
    create?: Array<cart_itemsCreateWithoutProductsInput>;

    @Field(() => [cart_itemsCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => cart_itemsCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<cart_itemsCreateOrConnectWithoutProductsInput>;

    @Field(() => [cart_itemsUpsertWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => cart_itemsUpsertWithWhereUniqueWithoutProductsInput)
    upsert?: Array<cart_itemsUpsertWithWhereUniqueWithoutProductsInput>;

    @Field(() => cart_itemsCreateManyProductsInputEnvelope, {nullable:true})
    @Type(() => cart_itemsCreateManyProductsInputEnvelope)
    createMany?: cart_itemsCreateManyProductsInputEnvelope;

    @Field(() => [cart_itemsWhereUniqueInput], {nullable:true})
    @Type(() => cart_itemsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<cart_itemsWhereUniqueInput, 'id'>>;

    @Field(() => [cart_itemsWhereUniqueInput], {nullable:true})
    @Type(() => cart_itemsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<cart_itemsWhereUniqueInput, 'id'>>;

    @Field(() => [cart_itemsWhereUniqueInput], {nullable:true})
    @Type(() => cart_itemsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<cart_itemsWhereUniqueInput, 'id'>>;

    @Field(() => [cart_itemsWhereUniqueInput], {nullable:true})
    @Type(() => cart_itemsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<cart_itemsWhereUniqueInput, 'id'>>;

    @Field(() => [cart_itemsUpdateWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => cart_itemsUpdateWithWhereUniqueWithoutProductsInput)
    update?: Array<cart_itemsUpdateWithWhereUniqueWithoutProductsInput>;

    @Field(() => [cart_itemsUpdateManyWithWhereWithoutProductsInput], {nullable:true})
    @Type(() => cart_itemsUpdateManyWithWhereWithoutProductsInput)
    updateMany?: Array<cart_itemsUpdateManyWithWhereWithoutProductsInput>;

    @Field(() => [cart_itemsScalarWhereInput], {nullable:true})
    @Type(() => cart_itemsScalarWhereInput)
    deleteMany?: Array<cart_itemsScalarWhereInput>;
}
