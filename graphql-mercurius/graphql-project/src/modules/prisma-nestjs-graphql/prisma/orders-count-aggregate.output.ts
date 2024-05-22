import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OrdersCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    total!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
