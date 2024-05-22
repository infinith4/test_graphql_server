import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Cart_itemsAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    cart_id?: number;

    @Field(() => Float, {nullable:true})
    product_id?: number;

    @Field(() => Float, {nullable:true})
    quantity?: number;
}
