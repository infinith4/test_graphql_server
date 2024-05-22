import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { Enumproducts_statusNullableFilter } from '../prisma/enumproducts-status-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class productsScalarWhereInput {

    @Field(() => [productsScalarWhereInput], {nullable:true})
    AND?: Array<productsScalarWhereInput>;

    @Field(() => [productsScalarWhereInput], {nullable:true})
    OR?: Array<productsScalarWhereInput>;

    @Field(() => [productsScalarWhereInput], {nullable:true})
    NOT?: Array<productsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    merchant_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    price?: IntNullableFilter;

    @Field(() => Enumproducts_statusNullableFilter, {nullable:true})
    status?: Enumproducts_statusNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    category_id?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;
}
