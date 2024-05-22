import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Customer_addressesCountAggregate } from './customer-addresses-count-aggregate.output';
import { Customer_addressesAvgAggregate } from './customer-addresses-avg-aggregate.output';
import { Customer_addressesSumAggregate } from './customer-addresses-sum-aggregate.output';
import { Customer_addressesMinAggregate } from './customer-addresses-min-aggregate.output';
import { Customer_addressesMaxAggregate } from './customer-addresses-max-aggregate.output';

@ObjectType()
export class AggregateCustomer_addresses {

    @Field(() => Customer_addressesCountAggregate, {nullable:true})
    _count?: Customer_addressesCountAggregate;

    @Field(() => Customer_addressesAvgAggregate, {nullable:true})
    _avg?: Customer_addressesAvgAggregate;

    @Field(() => Customer_addressesSumAggregate, {nullable:true})
    _sum?: Customer_addressesSumAggregate;

    @Field(() => Customer_addressesMinAggregate, {nullable:true})
    _min?: Customer_addressesMinAggregate;

    @Field(() => Customer_addressesMaxAggregate, {nullable:true})
    _max?: Customer_addressesMaxAggregate;
}
