import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { merchantsWhereInput } from './merchants-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { Merchant_imagesListRelationFilter } from '../prisma/merchant-images-list-relation-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { CountriesNullableRelationFilter } from '../prisma/countries-nullable-relation-filter.input';
import { ProductsListRelationFilter } from '../prisma/products-list-relation-filter.input';

@InputType()
export class merchantsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [merchantsWhereInput], {nullable:true})
    AND?: Array<merchantsWhereInput>;

    @Field(() => [merchantsWhereInput], {nullable:true})
    OR?: Array<merchantsWhereInput>;

    @Field(() => [merchantsWhereInput], {nullable:true})
    NOT?: Array<merchantsWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    admin_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    country_code?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;

    @Field(() => Merchant_imagesListRelationFilter, {nullable:true})
    merchant_images?: Merchant_imagesListRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users?: UsersRelationFilter;

    @Field(() => CountriesNullableRelationFilter, {nullable:true})
    countries?: CountriesNullableRelationFilter;

    @Field(() => ProductsListRelationFilter, {nullable:true})
    products?: ProductsListRelationFilter;
}
