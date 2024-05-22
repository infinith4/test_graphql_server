import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CountriesCountAggregate {

    @Field(() => Int, {nullable:false})
    code!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    continent_code!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
