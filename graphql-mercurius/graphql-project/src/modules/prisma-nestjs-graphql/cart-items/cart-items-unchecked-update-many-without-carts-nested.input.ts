import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cart_itemsCreateWithoutCartsInput } from './cart-items-create-without-carts.input';
import { Type } from 'class-transformer';
import { cart_itemsCreateOrConnectWithoutCartsInput } from './cart-items-create-or-connect-without-carts.input';
import { cart_itemsUpsertWithWhereUniqueWithoutCartsInput } from './cart-items-upsert-with-where-unique-without-carts.input';
import { cart_itemsCreateManyCartsInputEnvelope } from './cart-items-create-many-carts-input-envelope.input';
import { Prisma } from '@prisma/client';
import { cart_itemsWhereUniqueInput } from './cart-items-where-unique.input';
import { cart_itemsUpdateWithWhereUniqueWithoutCartsInput } from './cart-items-update-with-where-unique-without-carts.input';
import { cart_itemsUpdateManyWithWhereWithoutCartsInput } from './cart-items-update-many-with-where-without-carts.input';
import { cart_itemsScalarWhereInput } from './cart-items-scalar-where.input';

@InputType()
export class cart_itemsUncheckedUpdateManyWithoutCartsNestedInput {

    @Field(() => [cart_itemsCreateWithoutCartsInput], {nullable:true})
    @Type(() => cart_itemsCreateWithoutCartsInput)
    create?: Array<cart_itemsCreateWithoutCartsInput>;

    @Field(() => [cart_itemsCreateOrConnectWithoutCartsInput], {nullable:true})
    @Type(() => cart_itemsCreateOrConnectWithoutCartsInput)
    connectOrCreate?: Array<cart_itemsCreateOrConnectWithoutCartsInput>;

    @Field(() => [cart_itemsUpsertWithWhereUniqueWithoutCartsInput], {nullable:true})
    @Type(() => cart_itemsUpsertWithWhereUniqueWithoutCartsInput)
    upsert?: Array<cart_itemsUpsertWithWhereUniqueWithoutCartsInput>;

    @Field(() => cart_itemsCreateManyCartsInputEnvelope, {nullable:true})
    @Type(() => cart_itemsCreateManyCartsInputEnvelope)
    createMany?: cart_itemsCreateManyCartsInputEnvelope;

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

    @Field(() => [cart_itemsUpdateWithWhereUniqueWithoutCartsInput], {nullable:true})
    @Type(() => cart_itemsUpdateWithWhereUniqueWithoutCartsInput)
    update?: Array<cart_itemsUpdateWithWhereUniqueWithoutCartsInput>;

    @Field(() => [cart_itemsUpdateManyWithWhereWithoutCartsInput], {nullable:true})
    @Type(() => cart_itemsUpdateManyWithWhereWithoutCartsInput)
    updateMany?: Array<cart_itemsUpdateManyWithWhereWithoutCartsInput>;

    @Field(() => [cart_itemsScalarWhereInput], {nullable:true})
    @Type(() => cart_itemsScalarWhereInput)
    deleteMany?: Array<cart_itemsScalarWhereInput>;
}
