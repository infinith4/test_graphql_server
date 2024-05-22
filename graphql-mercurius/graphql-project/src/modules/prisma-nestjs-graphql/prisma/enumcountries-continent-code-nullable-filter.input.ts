import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { countries_continent_code } from './countries-continent-code.enum';
import { NestedEnumcountries_continent_codeNullableFilter } from './nested-enumcountries-continent-code-nullable-filter.input';

@InputType()
export class Enumcountries_continent_codeNullableFilter {

    @Field(() => countries_continent_code, {nullable:true})
    equals?: keyof typeof countries_continent_code;

    @Field(() => [countries_continent_code], {nullable:true})
    in?: Array<keyof typeof countries_continent_code>;

    @Field(() => [countries_continent_code], {nullable:true})
    notIn?: Array<keyof typeof countries_continent_code>;

    @Field(() => NestedEnumcountries_continent_codeNullableFilter, {nullable:true})
    not?: NestedEnumcountries_continent_codeNullableFilter;
}
