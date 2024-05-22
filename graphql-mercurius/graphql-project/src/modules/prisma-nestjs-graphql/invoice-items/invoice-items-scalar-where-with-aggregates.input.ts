import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class invoice_itemsScalarWhereWithAggregatesInput {

    @Field(() => [invoice_itemsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<invoice_itemsScalarWhereWithAggregatesInput>;

    @Field(() => [invoice_itemsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<invoice_itemsScalarWhereWithAggregatesInput>;

    @Field(() => [invoice_itemsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<invoice_itemsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    invoice_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    unit_price?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    quantity?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeNullableWithAggregatesFilter;
}
