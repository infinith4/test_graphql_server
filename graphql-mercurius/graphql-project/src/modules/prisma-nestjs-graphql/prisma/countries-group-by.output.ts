import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { countries_continent_code } from './countries-continent-code.enum';
import { CountriesCountAggregate } from './countries-count-aggregate.output';
import { CountriesAvgAggregate } from './countries-avg-aggregate.output';
import { CountriesSumAggregate } from './countries-sum-aggregate.output';
import { CountriesMinAggregate } from './countries-min-aggregate.output';
import { CountriesMaxAggregate } from './countries-max-aggregate.output';

@ObjectType()
export class CountriesGroupBy {

    @Field(() => Int, {nullable:false})
    code!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => countries_continent_code, {nullable:true})
    continent_code?: keyof typeof countries_continent_code;

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
