import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { OrdersRelationFilter } from '../prisma/orders-relation-filter.input';

@InputType()
export class payment_transactionsWhereInput {

    @Field(() => [payment_transactionsWhereInput], {nullable:true})
    AND?: Array<payment_transactionsWhereInput>;

    @Field(() => [payment_transactionsWhereInput], {nullable:true})
    OR?: Array<payment_transactionsWhereInput>;

    @Field(() => [payment_transactionsWhereInput], {nullable:true})
    NOT?: Array<payment_transactionsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    order_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    amount?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    status?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    payment_method?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    transaction_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;

    @Field(() => OrdersRelationFilter, {nullable:true})
    orders?: OrdersRelationFilter;
}
