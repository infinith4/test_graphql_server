import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { InvoicesRelationFilter } from '../prisma/invoices-relation-filter.input';

@InputType()
export class invoice_itemsWhereInput {

    @Field(() => [invoice_itemsWhereInput], {nullable:true})
    AND?: Array<invoice_itemsWhereInput>;

    @Field(() => [invoice_itemsWhereInput], {nullable:true})
    OR?: Array<invoice_itemsWhereInput>;

    @Field(() => [invoice_itemsWhereInput], {nullable:true})
    NOT?: Array<invoice_itemsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    invoice_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    unit_price?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    quantity?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;

    @Field(() => InvoicesRelationFilter, {nullable:true})
    invoices?: InvoicesRelationFilter;
}
