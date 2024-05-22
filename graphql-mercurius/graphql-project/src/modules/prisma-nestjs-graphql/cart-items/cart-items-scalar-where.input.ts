import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class cart_itemsScalarWhereInput {

    @Field(() => [cart_itemsScalarWhereInput], {nullable:true})
    AND?: Array<cart_itemsScalarWhereInput>;

    @Field(() => [cart_itemsScalarWhereInput], {nullable:true})
    OR?: Array<cart_itemsScalarWhereInput>;

    @Field(() => [cart_itemsScalarWhereInput], {nullable:true})
    NOT?: Array<cart_itemsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    cart_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    product_id?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    quantity?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    created_at?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;
}
