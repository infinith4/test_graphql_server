import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { customer_addressesWhereInput } from './customer-addresses-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { CustomersRelationFilter } from '../prisma/customers-relation-filter.input';

@InputType()
export class customer_addressesWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [customer_addressesWhereInput], {nullable:true})
    AND?: Array<customer_addressesWhereInput>;

    @Field(() => [customer_addressesWhereInput], {nullable:true})
    OR?: Array<customer_addressesWhereInput>;

    @Field(() => [customer_addressesWhereInput], {nullable:true})
    NOT?: Array<customer_addressesWhereInput>;

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

    @Field(() => CustomersRelationFilter, {nullable:true})
    customers?: CustomersRelationFilter;
}
