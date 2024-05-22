import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CartsCountAggregate } from './carts-count-aggregate.output';
import { CartsAvgAggregate } from './carts-avg-aggregate.output';
import { CartsSumAggregate } from './carts-sum-aggregate.output';
import { CartsMinAggregate } from './carts-min-aggregate.output';
import { CartsMaxAggregate } from './carts-max-aggregate.output';

@ObjectType()
export class AggregateCarts {

    @Field(() => CartsCountAggregate, {nullable:true})
    _count?: CartsCountAggregate;

    @Field(() => CartsAvgAggregate, {nullable:true})
    _avg?: CartsAvgAggregate;

    @Field(() => CartsSumAggregate, {nullable:true})
    _sum?: CartsSumAggregate;

    @Field(() => CartsMinAggregate, {nullable:true})
    _min?: CartsMinAggregate;

    @Field(() => CartsMaxAggregate, {nullable:true})
    _max?: CartsMaxAggregate;
}
