import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { countriesWhereInput } from './countries-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { Enumcountries_continent_codeNullableFilter } from '../prisma/enumcountries-continent-code-nullable-filter.input';
import { MerchantsListRelationFilter } from '../prisma/merchants-list-relation-filter.input';
import { UsersListRelationFilter } from '../prisma/users-list-relation-filter.input';

@InputType()
export class countriesWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    code?: number;

    @Field(() => [countriesWhereInput], {nullable:true})
    AND?: Array<countriesWhereInput>;

    @Field(() => [countriesWhereInput], {nullable:true})
    OR?: Array<countriesWhereInput>;

    @Field(() => [countriesWhereInput], {nullable:true})
    NOT?: Array<countriesWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => Enumcountries_continent_codeNullableFilter, {nullable:true})
    continent_code?: Enumcountries_continent_codeNullableFilter;

    @Field(() => MerchantsListRelationFilter, {nullable:true})
    merchants?: MerchantsListRelationFilter;

    @Field(() => UsersListRelationFilter, {nullable:true})
    users?: UsersListRelationFilter;
}
