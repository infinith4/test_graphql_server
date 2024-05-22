import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { invoice_items } from '../invoice-items/invoice-items.model';
import { customers } from '../customers/customers.model';
import { InvoicesCount } from '../prisma/invoices-count.output';

@ObjectType()
export class invoices {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    customer_id!: number;

    @Field(() => Date, {nullable:false})
    invoice_date!: Date;

    @Field(() => String, {nullable:true})
    billing_address!: string | null;

    @Field(() => String, {nullable:true})
    billing_city!: string | null;

    @Field(() => String, {nullable:true})
    billing_state!: string | null;

    @Field(() => Int, {nullable:true})
    billing_country_code!: number | null;

    @Field(() => String, {nullable:true})
    billing_postal_code!: string | null;

    @Field(() => Int, {nullable:false})
    total!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:true})
    updated_at!: Date | null;

    @Field(() => [invoice_items], {nullable:true})
    invoice_items?: Array<invoice_items>;

    @Field(() => customers, {nullable:false})
    customers?: customers;

    @Field(() => InvoicesCount, {nullable:false})
    _count?: InvoicesCount;
}
