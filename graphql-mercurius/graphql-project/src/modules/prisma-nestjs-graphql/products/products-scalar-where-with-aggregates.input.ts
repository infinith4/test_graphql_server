import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { Enumproducts_statusNullableWithAggregatesFilter } from '../prisma/enumproducts-status-nullable-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class productsScalarWhereWithAggregatesInput {

    @Field(() => [productsScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => productsScalarWhereWithAggregatesInput)
    AND?: Array<productsScalarWhereWithAggregatesInput>;

    @Field(() => [productsScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => productsScalarWhereWithAggregatesInput)
    OR?: Array<productsScalarWhereWithAggregatesInput>;

    @Field(() => [productsScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => productsScalarWhereWithAggregatesInput)
    NOT?: Array<productsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => Enumproducts_statusNullableWithAggregatesFilter, {nullable:true})
    status?: Enumproducts_statusNullableWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    price?: DecimalWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    stock?: IntWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeNullableWithAggregatesFilter;
}
