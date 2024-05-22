import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AreasCountAggregate } from './areas-count-aggregate.output';
import { AreasAvgAggregate } from './areas-avg-aggregate.output';
import { AreasSumAggregate } from './areas-sum-aggregate.output';
import { AreasMinAggregate } from './areas-min-aggregate.output';
import { AreasMaxAggregate } from './areas-max-aggregate.output';

@ObjectType()
export class AggregateAreas {

    @Field(() => AreasCountAggregate, {nullable:true})
    _count?: AreasCountAggregate;

    @Field(() => AreasAvgAggregate, {nullable:true})
    _avg?: AreasAvgAggregate;

    @Field(() => AreasSumAggregate, {nullable:true})
    _sum?: AreasSumAggregate;

    @Field(() => AreasMinAggregate, {nullable:true})
    _min?: AreasMinAggregate;

    @Field(() => AreasMaxAggregate, {nullable:true})
    _max?: AreasMaxAggregate;
}
