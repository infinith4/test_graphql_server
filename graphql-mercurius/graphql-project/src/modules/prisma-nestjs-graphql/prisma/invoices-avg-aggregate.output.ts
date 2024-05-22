import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class InvoicesAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    customer_id?: number;

    @Field(() => Float, {nullable:true})
    billing_country_code?: number;

    @Field(() => Float, {nullable:true})
    total?: number;
}
