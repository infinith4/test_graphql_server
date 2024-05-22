import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class customer_addressesScalarWhereInput {

    @Field(() => [customer_addressesScalarWhereInput], {nullable:true})
    AND?: Array<customer_addressesScalarWhereInput>;

    @Field(() => [customer_addressesScalarWhereInput], {nullable:true})
    OR?: Array<customer_addressesScalarWhereInput>;

    @Field(() => [customer_addressesScalarWhereInput], {nullable:true})
    NOT?: Array<customer_addressesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    customer_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    address_line1?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    address_line2?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    city?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    state?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    postal_code?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    country?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    created_at?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;
}
