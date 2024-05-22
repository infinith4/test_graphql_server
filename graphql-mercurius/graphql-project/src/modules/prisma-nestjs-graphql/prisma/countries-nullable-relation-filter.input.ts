import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { countriesWhereInput } from '../countries/countries-where.input';

@InputType()
export class CountriesNullableRelationFilter {

    @Field(() => countriesWhereInput, {nullable:true})
    is?: countriesWhereInput;

    @Field(() => countriesWhereInput, {nullable:true})
    isNot?: countriesWhereInput;
}
