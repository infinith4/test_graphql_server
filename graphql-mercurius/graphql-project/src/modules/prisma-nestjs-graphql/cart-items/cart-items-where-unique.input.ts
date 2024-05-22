import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { cart_itemsWhereInput } from './cart-items-where.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { CartsNullableRelationFilter } from '../prisma/carts-nullable-relation-filter.input';
import { ProductsNullableRelationFilter } from '../prisma/products-nullable-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class cart_itemsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [cart_itemsWhereInput], {nullable:true})
    AND?: Array<cart_itemsWhereInput>;

    @Field(() => [cart_itemsWhereInput], {nullable:true})
    OR?: Array<cart_itemsWhereInput>;

    @Field(() => [cart_itemsWhereInput], {nullable:true})
    NOT?: Array<cart_itemsWhereInput>;

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

    @Field(() => CartsNullableRelationFilter, {nullable:true})
    carts?: CartsNullableRelationFilter;

    @Field(() => ProductsNullableRelationFilter, {nullable:true})
    @Type(() => ProductsNullableRelationFilter)
    products?: ProductsNullableRelationFilter;
}
