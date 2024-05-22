import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Cart_itemsCountAggregate } from './cart-items-count-aggregate.output';
import { Cart_itemsAvgAggregate } from './cart-items-avg-aggregate.output';
import { Cart_itemsSumAggregate } from './cart-items-sum-aggregate.output';
import { Cart_itemsMinAggregate } from './cart-items-min-aggregate.output';
import { Cart_itemsMaxAggregate } from './cart-items-max-aggregate.output';

@ObjectType()
export class Cart_itemsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    cart_id?: number;

    @Field(() => Int, {nullable:true})
    product_id?: number;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => Cart_itemsCountAggregate, {nullable:true})
    _count?: Cart_itemsCountAggregate;

    @Field(() => Cart_itemsAvgAggregate, {nullable:true})
    _avg?: Cart_itemsAvgAggregate;

    @Field(() => Cart_itemsSumAggregate, {nullable:true})
    _sum?: Cart_itemsSumAggregate;

    @Field(() => Cart_itemsMinAggregate, {nullable:true})
    _min?: Cart_itemsMinAggregate;

    @Field(() => Cart_itemsMaxAggregate, {nullable:true})
    _max?: Cart_itemsMaxAggregate;
}
