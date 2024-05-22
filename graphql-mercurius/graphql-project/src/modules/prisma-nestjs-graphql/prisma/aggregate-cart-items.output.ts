import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Cart_itemsCountAggregate } from './cart-items-count-aggregate.output';
import { Cart_itemsAvgAggregate } from './cart-items-avg-aggregate.output';
import { Cart_itemsSumAggregate } from './cart-items-sum-aggregate.output';
import { Cart_itemsMinAggregate } from './cart-items-min-aggregate.output';
import { Cart_itemsMaxAggregate } from './cart-items-max-aggregate.output';

@ObjectType()
export class AggregateCart_items {

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
