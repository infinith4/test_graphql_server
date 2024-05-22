import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class order_itemsScalarWhereWithAggregatesInput {

    @Field(() => [order_itemsScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => order_itemsScalarWhereWithAggregatesInput)
    AND?: Array<order_itemsScalarWhereWithAggregatesInput>;

    @Field(() => [order_itemsScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => order_itemsScalarWhereWithAggregatesInput)
    OR?: Array<order_itemsScalarWhereWithAggregatesInput>;

    @Field(() => [order_itemsScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => order_itemsScalarWhereWithAggregatesInput)
    NOT?: Array<order_itemsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    order_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    product_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    quantity?: IntWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    price?: DecimalWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeNullableWithAggregatesFilter;
}
