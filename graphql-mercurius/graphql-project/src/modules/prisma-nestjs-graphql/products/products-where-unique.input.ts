import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { productsWhereInput } from './products-where.input';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { Enumproducts_statusNullableFilter } from '../prisma/enumproducts-status-nullable-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { Cart_itemsListRelationFilter } from '../prisma/cart-items-list-relation-filter.input';
import { Order_itemsListRelationFilter } from '../prisma/order-items-list-relation-filter.input';
import { Product_categoriesListRelationFilter } from '../prisma/product-categories-list-relation-filter.input';

@InputType()
export class productsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [productsWhereInput], {nullable:true})
    @Type(() => productsWhereInput)
    AND?: Array<productsWhereInput>;

    @Field(() => [productsWhereInput], {nullable:true})
    @Type(() => productsWhereInput)
    OR?: Array<productsWhereInput>;

    @Field(() => [productsWhereInput], {nullable:true})
    @Type(() => productsWhereInput)
    NOT?: Array<productsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => Enumproducts_statusNullableFilter, {nullable:true})
    status?: Enumproducts_statusNullableFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    price?: DecimalFilter;

    @Field(() => IntFilter, {nullable:true})
    stock?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    created_at?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;

    @Field(() => Cart_itemsListRelationFilter, {nullable:true})
    @Type(() => Cart_itemsListRelationFilter)
    cart_items?: Cart_itemsListRelationFilter;

    @Field(() => Order_itemsListRelationFilter, {nullable:true})
    @Type(() => Order_itemsListRelationFilter)
    order_items?: Order_itemsListRelationFilter;

    @Field(() => Product_categoriesListRelationFilter, {nullable:true})
    @Type(() => Product_categoriesListRelationFilter)
    product_categories?: Product_categoriesListRelationFilter;
}
