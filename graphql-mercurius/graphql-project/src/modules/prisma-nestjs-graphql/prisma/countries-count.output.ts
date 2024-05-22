import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CountriesCount {

    @Field(() => Int, {nullable:false})
    merchants!: number;

    @Field(() => Int, {nullable:false})
    users!: number;
}
