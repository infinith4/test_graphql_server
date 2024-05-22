import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { OrdersRelationFilter } from '../prisma/orders-relation-filter.input';
import { ProductsRelationFilter } from '../prisma/products-relation-filter.input';

@InputType()
export class order_itemsWhereInput {

    @Field(() => [order_itemsWhereInput], {nullable:true})
    @Type(() => order_itemsWhereInput)
    AND?: Array<order_itemsWhereInput>;

    @Field(() => [order_itemsWhereInput], {nullable:true})
    @Type(() => order_itemsWhereInput)
    OR?: Array<order_itemsWhereInput>;

    @Field(() => [order_itemsWhereInput], {nullable:true})
    @Type(() => order_itemsWhereInput)
    NOT?: Array<order_itemsWhereInput>;

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

    @Field(() => OrdersRelationFilter, {nullable:true})
    @Type(() => OrdersRelationFilter)
    orders?: OrdersRelationFilter;

    @Field(() => ProductsRelationFilter, {nullable:true})
    @Type(() => ProductsRelationFilter)
    products?: ProductsRelationFilter;
}
