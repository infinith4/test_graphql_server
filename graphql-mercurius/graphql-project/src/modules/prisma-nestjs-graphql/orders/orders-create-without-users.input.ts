import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { orders_status } from '../prisma/orders-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { order_itemsCreateNestedManyWithoutOrdersInput } from '../order-items/order-items-create-nested-many-without-orders.input';
import { paymentsCreateNestedManyWithoutOrdersInput } from '../payments/payments-create-nested-many-without-orders.input';

@InputType()
export class ordersCreateWithoutUsersInput {

    @Field(() => orders_status, {nullable:true})
    status?: keyof typeof orders_status;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    total!: Decimal;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => order_itemsCreateNestedManyWithoutOrdersInput, {nullable:true})
    @Type(() => order_itemsCreateNestedManyWithoutOrdersInput)
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput;

    @Field(() => paymentsCreateNestedManyWithoutOrdersInput, {nullable:true})
    @Type(() => paymentsCreateNestedManyWithoutOrdersInput)
    payments?: paymentsCreateNestedManyWithoutOrdersInput;
}
