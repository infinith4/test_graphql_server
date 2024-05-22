import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { Customer_addressesListRelationFilter } from '../prisma/customer-addresses-list-relation-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class customersWhereInput {

    @Field(() => [customersWhereInput], {nullable:true})
    AND?: Array<customersWhereInput>;

    @Field(() => [customersWhereInput], {nullable:true})
    OR?: Array<customersWhereInput>;

    @Field(() => [customersWhereInput], {nullable:true})
    NOT?: Array<customersWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    user_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    address?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    created_at?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;

    @Field(() => Customer_addressesListRelationFilter, {nullable:true})
    customer_addresses?: Customer_addressesListRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    @Type(() => UsersRelationFilter)
    users?: UsersRelationFilter;
}
