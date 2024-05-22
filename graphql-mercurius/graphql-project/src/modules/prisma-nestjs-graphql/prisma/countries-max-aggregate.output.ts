import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { countries_continent_code } from './countries-continent-code.enum';

@ObjectType()
export class CountriesMaxAggregate {

    @Field(() => Int, {nullable:true})
    code?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => countries_continent_code, {nullable:true})
    continent_code?: keyof typeof countries_continent_code;
}
