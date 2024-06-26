import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CustomersCount {

    @Field(() => Int, {nullable:false})
    customer_addresses!: number;
}
