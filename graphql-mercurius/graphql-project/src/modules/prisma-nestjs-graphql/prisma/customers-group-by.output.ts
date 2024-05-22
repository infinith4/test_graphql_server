import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CustomersCountAggregate } from './customers-count-aggregate.output';
import { CustomersAvgAggregate } from './customers-avg-aggregate.output';
import { CustomersSumAggregate } from './customers-sum-aggregate.output';
import { CustomersMinAggregate } from './customers-min-aggregate.output';
import { CustomersMaxAggregate } from './customers-max-aggregate.output';

@ObjectType()
export class CustomersGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => CustomersCountAggregate, {nullable:true})
    _count?: CustomersCountAggregate;

    @Field(() => CustomersAvgAggregate, {nullable:true})
    _avg?: CustomersAvgAggregate;

    @Field(() => CustomersSumAggregate, {nullable:true})
    _sum?: CustomersSumAggregate;

    @Field(() => CustomersMinAggregate, {nullable:true})
    _min?: CustomersMinAggregate;

    @Field(() => CustomersMaxAggregate, {nullable:true})
    _max?: CustomersMaxAggregate;
}
