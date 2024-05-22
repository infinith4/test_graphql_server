import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { orders } from '../orders/orders.model';

@ObjectType()
export class payment_transactions {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    order_id!: number;

    @Field(() => Int, {nullable:true})
    amount!: number | null;

    @Field(() => String, {nullable:true})
    status!: string | null;

    @Field(() => String, {nullable:false})
    payment_method!: string;

    @Field(() => String, {nullable:false})
    transaction_id!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:true})
    updated_at!: Date | null;

    @Field(() => orders, {nullable:false})
    orders?: orders;
}
