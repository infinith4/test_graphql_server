import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class manage_areasScalarWhereWithAggregatesInput {

    @Field(() => [manage_areasScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<manage_areasScalarWhereWithAggregatesInput>;

    @Field(() => [manage_areasScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<manage_areasScalarWhereWithAggregatesInput>;

    @Field(() => [manage_areasScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<manage_areasScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    area_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    employee_id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeNullableWithAggregatesFilter;
}
