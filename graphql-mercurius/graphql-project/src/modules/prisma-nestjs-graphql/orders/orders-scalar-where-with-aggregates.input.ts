import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { Enumorders_statusWithAggregatesFilter } from '../prisma/enumorders-status-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class ordersScalarWhereWithAggregatesInput {

    @Field(() => [ordersScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => ordersScalarWhereWithAggregatesInput)
    AND?: Array<ordersScalarWhereWithAggregatesInput>;

    @Field(() => [ordersScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => ordersScalarWhereWithAggregatesInput)
    OR?: Array<ordersScalarWhereWithAggregatesInput>;

    @Field(() => [ordersScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => ordersScalarWhereWithAggregatesInput)
    NOT?: Array<ordersScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    user_id?: IntNullableWithAggregatesFilter;

    @Field(() => Enumorders_statusWithAggregatesFilter, {nullable:true})
    status?: Enumorders_statusWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    total?: DecimalWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeNullableWithAggregatesFilter;
}
