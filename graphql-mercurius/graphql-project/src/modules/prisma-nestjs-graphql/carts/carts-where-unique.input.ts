import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { cartsWhereInput } from './carts-where.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { Cart_itemsListRelationFilter } from '../prisma/cart-items-list-relation-filter.input';
import { Type } from 'class-transformer';
import { UsersNullableRelationFilter } from '../prisma/users-nullable-relation-filter.input';

@InputType()
export class cartsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [cartsWhereInput], {nullable:true})
    AND?: Array<cartsWhereInput>;

    @Field(() => [cartsWhereInput], {nullable:true})
    OR?: Array<cartsWhereInput>;

    @Field(() => [cartsWhereInput], {nullable:true})
    NOT?: Array<cartsWhereInput>;

    @Field(() => IntNullableFilter, {nullable:true})
    user_id?: IntNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    created_at?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;

    @Field(() => Cart_itemsListRelationFilter, {nullable:true})
    @Type(() => Cart_itemsListRelationFilter)
    cart_items?: Cart_itemsListRelationFilter;

    @Field(() => UsersNullableRelationFilter, {nullable:true})
    @Type(() => UsersNullableRelationFilter)
    users?: UsersNullableRelationFilter;
}
