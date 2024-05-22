import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class InvoicesSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    customer_id?: number;

    @Field(() => Int, {nullable:true})
    billing_country_code?: number;

    @Field(() => Int, {nullable:true})
    total?: number;
}
