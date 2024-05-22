import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class cart_itemsScalarWhereWithAggregatesInput {

    @Field(() => [cart_itemsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<cart_itemsScalarWhereWithAggregatesInput>;

    @Field(() => [cart_itemsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<cart_itemsScalarWhereWithAggregatesInput>;

    @Field(() => [cart_itemsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<cart_itemsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    cart_id?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    product_id?: IntNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    quantity?: IntWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeNullableWithAggregatesFilter;
}
