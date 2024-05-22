import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { orders_status } from '../prisma/orders-status.enum';
import { payment_transactionsUncheckedCreateNestedManyWithoutOrdersInput } from '../payment-transactions/payment-transactions-unchecked-create-nested-many-without-orders.input';

@InputType()
export class ordersUncheckedCreateWithoutCustomersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => orders_status, {nullable:true})
    status?: keyof typeof orders_status;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => payment_transactionsUncheckedCreateNestedManyWithoutOrdersInput, {nullable:true})
    payment_transactions?: payment_transactionsUncheckedCreateNestedManyWithoutOrdersInput;
}
