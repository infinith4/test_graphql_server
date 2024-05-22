import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class InvoicesCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    customer_id!: number;

    @Field(() => Int, {nullable:false})
    invoice_date!: number;

    @Field(() => Int, {nullable:false})
    billing_address!: number;

    @Field(() => Int, {nullable:false})
    billing_city!: number;

    @Field(() => Int, {nullable:false})
    billing_state!: number;

    @Field(() => Int, {nullable:false})
    billing_country_code!: number;

    @Field(() => Int, {nullable:false})
    billing_postal_code!: number;

    @Field(() => Int, {nullable:false})
    total!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
