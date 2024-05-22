import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { orders_status } from '../prisma/orders-status.enum';
import { customersCreateNestedOneWithoutOrdersInput } from '../customers/customers-create-nested-one-without-orders.input';

@InputType()
export class ordersCreateWithoutPayment_transactionsInput {

    @Field(() => orders_status, {nullable:true})
    status?: keyof typeof orders_status;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => customersCreateNestedOneWithoutOrdersInput, {nullable:false})
    customers!: customersCreateNestedOneWithoutOrdersInput;
}
