import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { orders_status } from '../prisma/orders-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { paymentsUncheckedCreateNestedManyWithoutOrdersInput } from '../payments/payments-unchecked-create-nested-many-without-orders.input';

@InputType()
export class ordersUncheckedCreateWithoutOrder_itemsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    user_id?: number;

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

    @Field(() => paymentsUncheckedCreateNestedManyWithoutOrdersInput, {nullable:true})
    @Type(() => paymentsUncheckedCreateNestedManyWithoutOrdersInput)
    payments?: paymentsUncheckedCreateNestedManyWithoutOrdersInput;
}
