import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CountriesSumAggregate {

    @Field(() => Int, {nullable:true})
    code?: number;
}
