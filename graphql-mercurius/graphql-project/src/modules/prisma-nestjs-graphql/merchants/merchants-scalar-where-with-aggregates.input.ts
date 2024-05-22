import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class merchantsScalarWhereWithAggregatesInput {

    @Field(() => [merchantsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<merchantsScalarWhereWithAggregatesInput>;

    @Field(() => [merchantsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<merchantsScalarWhereWithAggregatesInput>;

    @Field(() => [merchantsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<merchantsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    admin_id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    country_code?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeNullableWithAggregatesFilter;
}
