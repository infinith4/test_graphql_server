import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CartsCountAggregate } from './carts-count-aggregate.output';
import { CartsAvgAggregate } from './carts-avg-aggregate.output';
import { CartsSumAggregate } from './carts-sum-aggregate.output';
import { CartsMinAggregate } from './carts-min-aggregate.output';
import { CartsMaxAggregate } from './carts-max-aggregate.output';

@ObjectType()
export class CartsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    user_id?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

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
