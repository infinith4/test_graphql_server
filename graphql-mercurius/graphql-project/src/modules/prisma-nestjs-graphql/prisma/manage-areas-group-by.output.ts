import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Manage_areasCountAggregate } from './manage-areas-count-aggregate.output';
import { Manage_areasAvgAggregate } from './manage-areas-avg-aggregate.output';
import { Manage_areasSumAggregate } from './manage-areas-sum-aggregate.output';
import { Manage_areasMinAggregate } from './manage-areas-min-aggregate.output';
import { Manage_areasMaxAggregate } from './manage-areas-max-aggregate.output';

@ObjectType()
export class Manage_areasGroupBy {

    @Field(() => Int, {nullable:false})
    area_id!: number;

    @Field(() => Int, {nullable:false})
    employee_id!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => Manage_areasCountAggregate, {nullable:true})
    _count?: Manage_areasCountAggregate;

    @Field(() => Manage_areasAvgAggregate, {nullable:true})
    _avg?: Manage_areasAvgAggregate;

    @Field(() => Manage_areasSumAggregate, {nullable:true})
    _sum?: Manage_areasSumAggregate;

    @Field(() => Manage_areasMinAggregate, {nullable:true})
    _min?: Manage_areasMinAggregate;

    @Field(() => Manage_areasMaxAggregate, {nullable:true})
    _max?: Manage_areasMaxAggregate;
}
