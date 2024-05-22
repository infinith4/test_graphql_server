import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { invoices } from '../invoices/invoices.model';

@ObjectType()
export class invoice_items {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    invoice_id!: number;

    @Field(() => Int, {nullable:false})
    unit_price!: number;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:true})
    updated_at!: Date | null;

    @Field(() => invoices, {nullable:false})
    invoices?: invoices;
}
