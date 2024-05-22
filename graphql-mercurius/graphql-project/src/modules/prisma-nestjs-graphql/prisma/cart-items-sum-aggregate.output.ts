import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Cart_itemsSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    cart_id?: number;

    @Field(() => Int, {nullable:true})
    product_id?: number;

    @Field(() => Int, {nullable:true})
    quantity?: number;
}
