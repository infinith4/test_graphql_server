import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { InvoicesCountAggregate } from './invoices-count-aggregate.output';
import { InvoicesAvgAggregate } from './invoices-avg-aggregate.output';
import { InvoicesSumAggregate } from './invoices-sum-aggregate.output';
import { InvoicesMinAggregate } from './invoices-min-aggregate.output';
import { InvoicesMaxAggregate } from './invoices-max-aggregate.output';

@ObjectType()
export class InvoicesGroupBy {

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

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => InvoicesCountAggregate, {nullable:true})
    _count?: InvoicesCountAggregate;

    @Field(() => InvoicesAvgAggregate, {nullable:true})
    _avg?: InvoicesAvgAggregate;

    @Field(() => InvoicesSumAggregate, {nullable:true})
    _sum?: InvoicesSumAggregate;

    @Field(() => InvoicesMinAggregate, {nullable:true})
    _min?: InvoicesMinAggregate;

    @Field(() => InvoicesMaxAggregate, {nullable:true})
    _max?: InvoicesMaxAggregate;
}
