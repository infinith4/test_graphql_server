import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class order_itemsScalarWhereInput {

    @Field(() => [order_itemsScalarWhereInput], {nullable:true})
    @Type(() => order_itemsScalarWhereInput)
    AND?: Array<order_itemsScalarWhereInput>;

    @Field(() => [order_itemsScalarWhereInput], {nullable:true})
    @Type(() => order_itemsScalarWhereInput)
    OR?: Array<order_itemsScalarWhereInput>;

    @Field(() => [order_itemsScalarWhereInput], {nullable:true})
    @Type(() => order_itemsScalarWhereInput)
    NOT?: Array<order_itemsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    order_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    product_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    quantity?: IntFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    price?: DecimalFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    created_at?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;
}
