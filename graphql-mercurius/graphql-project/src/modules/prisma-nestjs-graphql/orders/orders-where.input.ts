import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { Enumorders_statusFilter } from '../prisma/enumorders-status-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { Order_itemsListRelationFilter } from '../prisma/order-items-list-relation-filter.input';
import { UsersNullableRelationFilter } from '../prisma/users-nullable-relation-filter.input';
import { PaymentsListRelationFilter } from '../prisma/payments-list-relation-filter.input';

@InputType()
export class ordersWhereInput {

    @Field(() => [ordersWhereInput], {nullable:true})
    @Type(() => ordersWhereInput)
    AND?: Array<ordersWhereInput>;

    @Field(() => [ordersWhereInput], {nullable:true})
    @Type(() => ordersWhereInput)
    OR?: Array<ordersWhereInput>;

    @Field(() => [ordersWhereInput], {nullable:true})
    @Type(() => ordersWhereInput)
    NOT?: Array<ordersWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    user_id?: IntNullableFilter;

    @Field(() => Enumorders_statusFilter, {nullable:true})
    status?: Enumorders_statusFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    total?: DecimalFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    created_at?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;

    @Field(() => Order_itemsListRelationFilter, {nullable:true})
    @Type(() => Order_itemsListRelationFilter)
    order_items?: Order_itemsListRelationFilter;

    @Field(() => UsersNullableRelationFilter, {nullable:true})
    @Type(() => UsersNullableRelationFilter)
    users?: UsersNullableRelationFilter;

    @Field(() => PaymentsListRelationFilter, {nullable:true})
    @Type(() => PaymentsListRelationFilter)
    payments?: PaymentsListRelationFilter;
}
