import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Payment_transactionsMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    order_id?: number;

    @Field(() => Int, {nullable:true})
    amount?: number;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => String, {nullable:true})
    payment_method?: string;

    @Field(() => String, {nullable:true})
    transaction_id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
