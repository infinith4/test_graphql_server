import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_itemsCreateWithoutOrdersInput } from './order-items-create-without-orders.input';
import { Type } from 'class-transformer';
import { order_itemsCreateOrConnectWithoutOrdersInput } from './order-items-create-or-connect-without-orders.input';
import { order_itemsCreateManyOrdersInputEnvelope } from './order-items-create-many-orders-input-envelope.input';
import { Prisma } from '@prisma/client';
import { order_itemsWhereUniqueInput } from './order-items-where-unique.input';

@InputType()
export class order_itemsUncheckedCreateNestedManyWithoutOrdersInput {

    @Field(() => [order_itemsCreateWithoutOrdersInput], {nullable:true})
    @Type(() => order_itemsCreateWithoutOrdersInput)
    create?: Array<order_itemsCreateWithoutOrdersInput>;

    @Field(() => [order_itemsCreateOrConnectWithoutOrdersInput], {nullable:true})
    @Type(() => order_itemsCreateOrConnectWithoutOrdersInput)
    connectOrCreate?: Array<order_itemsCreateOrConnectWithoutOrdersInput>;

    @Field(() => order_itemsCreateManyOrdersInputEnvelope, {nullable:true})
    @Type(() => order_itemsCreateManyOrdersInputEnvelope)
    createMany?: order_itemsCreateManyOrdersInputEnvelope;

    @Field(() => [order_itemsWhereUniqueInput], {nullable:true})
    @Type(() => order_itemsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<order_itemsWhereUniqueInput, 'order_id_product_id'>>;
}
