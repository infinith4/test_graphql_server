import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProfilesCountAggregate } from './profiles-count-aggregate.output';
import { ProfilesAvgAggregate } from './profiles-avg-aggregate.output';
import { ProfilesSumAggregate } from './profiles-sum-aggregate.output';
import { ProfilesMinAggregate } from './profiles-min-aggregate.output';
import { ProfilesMaxAggregate } from './profiles-max-aggregate.output';

@ObjectType()
export class AggregateProfiles {

    @Field(() => ProfilesCountAggregate, {nullable:true})
    _count?: ProfilesCountAggregate;

    @Field(() => ProfilesAvgAggregate, {nullable:true})
    _avg?: ProfilesAvgAggregate;

    @Field(() => ProfilesSumAggregate, {nullable:true})
    _sum?: ProfilesSumAggregate;

    @Field(() => ProfilesMinAggregate, {nullable:true})
    _min?: ProfilesMinAggregate;

    @Field(() => ProfilesMaxAggregate, {nullable:true})
    _max?: ProfilesMaxAggregate;
}
