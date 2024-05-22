import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ordersOrderByWithRelationInput } from '../orders/orders-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { productsOrderByWithRelationInput } from '../products/products-order-by-with-relation.input';

@InputType()
export class order_itemsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    order_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    product_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    created_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => ordersOrderByWithRelationInput, {nullable:true})
    @Type(() => ordersOrderByWithRelationInput)
    orders?: ordersOrderByWithRelationInput;

    @Field(() => productsOrderByWithRelationInput, {nullable:true})
    @Type(() => productsOrderByWithRelationInput)
    products?: productsOrderByWithRelationInput;
}
