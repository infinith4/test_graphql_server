import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { OrdersNullableRelationFilter } from '../prisma/orders-nullable-relation-filter.input';

@InputType()
export class paymentsWhereInput {

    @Field(() => [paymentsWhereInput], {nullable:true})
    @Type(() => paymentsWhereInput)
    AND?: Array<paymentsWhereInput>;

    @Field(() => [paymentsWhereInput], {nullable:true})
    @Type(() => paymentsWhereInput)
    OR?: Array<paymentsWhereInput>;

    @Field(() => [paymentsWhereInput], {nullable:true})
    @Type(() => paymentsWhereInput)
    NOT?: Array<paymentsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    order_id?: IntNullableFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    amount?: DecimalFilter;

    @Field(() => StringFilter, {nullable:true})
    payment_method?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    payment_status?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    created_at?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;

    @Field(() => OrdersNullableRelationFilter, {nullable:true})
    @Type(() => OrdersNullableRelationFilter)
    orders?: OrdersNullableRelationFilter;
}
