import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class paymentsScalarWhereWithAggregatesInput {

    @Field(() => [paymentsScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => paymentsScalarWhereWithAggregatesInput)
    AND?: Array<paymentsScalarWhereWithAggregatesInput>;

    @Field(() => [paymentsScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => paymentsScalarWhereWithAggregatesInput)
    OR?: Array<paymentsScalarWhereWithAggregatesInput>;

    @Field(() => [paymentsScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => paymentsScalarWhereWithAggregatesInput)
    NOT?: Array<paymentsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    order_id?: IntNullableWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    amount?: DecimalWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    payment_method?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    payment_status?: StringWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeNullableWithAggregatesFilter;
}
