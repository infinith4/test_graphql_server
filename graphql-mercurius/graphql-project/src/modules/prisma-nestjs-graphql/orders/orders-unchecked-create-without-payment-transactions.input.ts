import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { orders_status } from '../prisma/orders-status.enum';

@InputType()
export class ordersUncheckedCreateWithoutPayment_transactionsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    customer_id!: number;

    @Field(() => orders_status, {nullable:true})
    status?: keyof typeof orders_status;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
