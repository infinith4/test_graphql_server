import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_itemsCreateWithoutOrdersInput } from './order-items-create-without-orders.input';
import { Type } from 'class-transformer';
import { order_itemsCreateOrConnectWithoutOrdersInput } from './order-items-create-or-connect-without-orders.input';
import { order_itemsUpsertWithWhereUniqueWithoutOrdersInput } from './order-items-upsert-with-where-unique-without-orders.input';
import { order_itemsCreateManyOrdersInputEnvelope } from './order-items-create-many-orders-input-envelope.input';
import { Prisma } from '@prisma/client';
import { order_itemsWhereUniqueInput } from './order-items-where-unique.input';
import { order_itemsUpdateWithWhereUniqueWithoutOrdersInput } from './order-items-update-with-where-unique-without-orders.input';
import { order_itemsUpdateManyWithWhereWithoutOrdersInput } from './order-items-update-many-with-where-without-orders.input';
import { order_itemsScalarWhereInput } from './order-items-scalar-where.input';

@InputType()
export class order_itemsUpdateManyWithoutOrdersNestedInput {

    @Field(() => [order_itemsCreateWithoutOrdersInput], {nullable:true})
    @Type(() => order_itemsCreateWithoutOrdersInput)
    create?: Array<order_itemsCreateWithoutOrdersInput>;

    @Field(() => [order_itemsCreateOrConnectWithoutOrdersInput], {nullable:true})
    @Type(() => order_itemsCreateOrConnectWithoutOrdersInput)
    connectOrCreate?: Array<order_itemsCreateOrConnectWithoutOrdersInput>;

    @Field(() => [order_itemsUpsertWithWhereUniqueWithoutOrdersInput], {nullable:true})
    @Type(() => order_itemsUpsertWithWhereUniqueWithoutOrdersInput)
    upsert?: Array<order_itemsUpsertWithWhereUniqueWithoutOrdersInput>;

    @Field(() => order_itemsCreateManyOrdersInputEnvelope, {nullable:true})
    @Type(() => order_itemsCreateManyOrdersInputEnvelope)
    createMany?: order_itemsCreateManyOrdersInputEnvelope;

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

    @Field(() => [order_itemsUpdateWithWhereUniqueWithoutOrdersInput], {nullable:true})
    @Type(() => order_itemsUpdateWithWhereUniqueWithoutOrdersInput)
    update?: Array<order_itemsUpdateWithWhereUniqueWithoutOrdersInput>;

    @Field(() => [order_itemsUpdateManyWithWhereWithoutOrdersInput], {nullable:true})
    @Type(() => order_itemsUpdateManyWithWhereWithoutOrdersInput)
    updateMany?: Array<order_itemsUpdateManyWithWhereWithoutOrdersInput>;

    @Field(() => [order_itemsScalarWhereInput], {nullable:true})
    @Type(() => order_itemsScalarWhereInput)
    deleteMany?: Array<order_itemsScalarWhereInput>;
}
