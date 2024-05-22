import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProfilesCountAggregate } from './profiles-count-aggregate.output';
import { ProfilesAvgAggregate } from './profiles-avg-aggregate.output';
import { ProfilesSumAggregate } from './profiles-sum-aggregate.output';
import { ProfilesMinAggregate } from './profiles-min-aggregate.output';
import { ProfilesMaxAggregate } from './profiles-max-aggregate.output';

@ObjectType()
export class ProfilesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    user_id?: number;

    @Field(() => String, {nullable:true})
    bio?: string;

    @Field(() => String, {nullable:true})
    website?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

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
