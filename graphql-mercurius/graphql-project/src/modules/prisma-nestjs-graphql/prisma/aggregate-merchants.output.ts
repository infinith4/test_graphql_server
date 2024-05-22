import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MerchantsCountAggregate } from './merchants-count-aggregate.output';
import { MerchantsAvgAggregate } from './merchants-avg-aggregate.output';
import { MerchantsSumAggregate } from './merchants-sum-aggregate.output';
import { MerchantsMinAggregate } from './merchants-min-aggregate.output';
import { MerchantsMaxAggregate } from './merchants-max-aggregate.output';

@ObjectType()
export class AggregateMerchants {

    @Field(() => MerchantsCountAggregate, {nullable:true})
    _count?: MerchantsCountAggregate;

    @Field(() => MerchantsAvgAggregate, {nullable:true})
    _avg?: MerchantsAvgAggregate;

    @Field(() => MerchantsSumAggregate, {nullable:true})
    _sum?: MerchantsSumAggregate;

    @Field(() => MerchantsMinAggregate, {nullable:true})
    _min?: MerchantsMinAggregate;

    @Field(() => MerchantsMaxAggregate, {nullable:true})
    _max?: MerchantsMaxAggregate;
}
