import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { Enumarticles_statusNullableWithAggregatesFilter } from '../prisma/enumarticles-status-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class articlesScalarWhereWithAggregatesInput {

    @Field(() => [articlesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<articlesScalarWhereWithAggregatesInput>;

    @Field(() => [articlesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<articlesScalarWhereWithAggregatesInput>;

    @Field(() => [articlesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<articlesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: StringWithAggregatesFilter;

    @Field(() => Enumarticles_statusNullableWithAggregatesFilter, {nullable:true})
    status?: Enumarticles_statusNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    user_id?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeNullableWithAggregatesFilter;
}
