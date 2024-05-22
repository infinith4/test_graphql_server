import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { Invoice_itemsListRelationFilter } from '../prisma/invoice-items-list-relation-filter.input';
import { CustomersRelationFilter } from '../prisma/customers-relation-filter.input';

@InputType()
export class invoicesWhereInput {

    @Field(() => [invoicesWhereInput], {nullable:true})
    AND?: Array<invoicesWhereInput>;

    @Field(() => [invoicesWhereInput], {nullable:true})
    OR?: Array<invoicesWhereInput>;

    @Field(() => [invoicesWhereInput], {nullable:true})
    NOT?: Array<invoicesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    customer_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    invoice_date?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    billing_address?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    billing_city?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    billing_state?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    billing_country_code?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    billing_postal_code?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    total?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;

    @Field(() => Invoice_itemsListRelationFilter, {nullable:true})
    invoice_items?: Invoice_itemsListRelationFilter;

    @Field(() => CustomersRelationFilter, {nullable:true})
    customers?: CustomersRelationFilter;
}
