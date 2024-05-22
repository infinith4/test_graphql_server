import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class invoice_itemsScalarWhereInput {

    @Field(() => [invoice_itemsScalarWhereInput], {nullable:true})
    AND?: Array<invoice_itemsScalarWhereInput>;

    @Field(() => [invoice_itemsScalarWhereInput], {nullable:true})
    OR?: Array<invoice_itemsScalarWhereInput>;

    @Field(() => [invoice_itemsScalarWhereInput], {nullable:true})
    NOT?: Array<invoice_itemsScalarWhereInput>;

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
}
