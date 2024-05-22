import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_itemsOrder_idProduct_idCompoundUniqueInput } from './order-items-order-id-product-id-compound-unique.input';
import { Type } from 'class-transformer';
import { order_itemsWhereInput } from './order-items-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { OrdersRelationFilter } from '../prisma/orders-relation-filter.input';
import { ProductsRelationFilter } from '../prisma/products-relation-filter.input';

@InputType()
export class order_itemsWhereUniqueInput {

    @Field(() => order_itemsOrder_idProduct_idCompoundUniqueInput, {nullable:true})
    @Type(() => order_itemsOrder_idProduct_idCompoundUniqueInput)
    order_id_product_id?: order_itemsOrder_idProduct_idCompoundUniqueInput;

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
