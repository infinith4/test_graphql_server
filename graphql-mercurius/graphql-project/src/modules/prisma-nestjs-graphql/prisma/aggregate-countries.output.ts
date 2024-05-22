import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CountriesCountAggregate } from './countries-count-aggregate.output';
import { CountriesAvgAggregate } from './countries-avg-aggregate.output';
import { CountriesSumAggregate } from './countries-sum-aggregate.output';
import { CountriesMinAggregate } from './countries-min-aggregate.output';
import { CountriesMaxAggregate } from './countries-max-aggregate.output';

@ObjectType()
export class AggregateCountries {

    @Field(() => CountriesCountAggregate, {nullable:true})
    _count?: CountriesCountAggregate;

    @Field(() => CountriesAvgAggregate, {nullable:true})
    _avg?: CountriesAvgAggregate;

    @Field(() => CountriesSumAggregate, {nullable:true})
    _sum?: CountriesSumAggregate;

    @Field(() => CountriesMinAggregate, {nullable:true})
    _min?: CountriesMinAggregate;

    @Field(() => CountriesMaxAggregate, {nullable:true})
    _max?: CountriesMaxAggregate;
}
