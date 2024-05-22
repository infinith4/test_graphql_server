import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class InvoicesMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    customer_id?: number;

    @Field(() => Date, {nullable:true})
    invoice_date?: Date | string;

    @Field(() => String, {nullable:true})
    billing_address?: string;

    @Field(() => String, {nullable:true})
    billing_city?: string;

    @Field(() => String, {nullable:true})
    billing_state?: string;

    @Field(() => Int, {nullable:true})
    billing_country_code?: number;

    @Field(() => String, {nullable:true})
    billing_postal_code?: string;

    @Field(() => Int, {nullable:true})
    total?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
