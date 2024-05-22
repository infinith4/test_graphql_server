import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class categoriesScalarWhereWithAggregatesInput {

    @Field(() => [categoriesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<categoriesScalarWhereWithAggregatesInput>;

    @Field(() => [categoriesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<categoriesScalarWhereWithAggregatesInput>;

    @Field(() => [categoriesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<categoriesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeNullableWithAggregatesFilter;
}
