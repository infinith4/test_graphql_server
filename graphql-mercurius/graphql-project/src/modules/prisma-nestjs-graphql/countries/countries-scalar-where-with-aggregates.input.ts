import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { Enumcountries_continent_codeNullableWithAggregatesFilter } from '../prisma/enumcountries-continent-code-nullable-with-aggregates-filter.input';

@InputType()
export class countriesScalarWhereWithAggregatesInput {

    @Field(() => [countriesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<countriesScalarWhereWithAggregatesInput>;

    @Field(() => [countriesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<countriesScalarWhereWithAggregatesInput>;

    @Field(() => [countriesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<countriesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    code?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => Enumcountries_continent_codeNullableWithAggregatesFilter, {nullable:true})
    continent_code?: Enumcountries_continent_codeNullableWithAggregatesFilter;
}
