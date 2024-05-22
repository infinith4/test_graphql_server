import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { countries_continent_code } from '../prisma/countries-continent-code.enum';

@InputType()
export class countriesCreateManyInput {

    @Field(() => Int, {nullable:false})
    code!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => countries_continent_code, {nullable:true})
    continent_code?: keyof typeof countries_continent_code;
}
