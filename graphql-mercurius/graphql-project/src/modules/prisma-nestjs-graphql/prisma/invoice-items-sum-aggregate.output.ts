import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Invoice_itemsSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    invoice_id?: number;

    @Field(() => Int, {nullable:true})
    unit_price?: number;

    @Field(() => Int, {nullable:true})
    quantity?: number;
}
