import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class invoicesCreateManyInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    customer_id!: number;

    @Field(() => Date, {nullable:false})
    invoice_date!: Date | string;

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

    @Field(() => Int, {nullable:false})
    total!: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
