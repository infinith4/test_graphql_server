import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { cart_itemsOrderByRelationAggregateInput } from '../cart-items/cart-items-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { order_itemsOrderByRelationAggregateInput } from '../order-items/order-items-order-by-relation-aggregate.input';
import { product_categoriesOrderByRelationAggregateInput } from '../product-categories/product-categories-order-by-relation-aggregate.input';

@InputType()
export class productsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    status?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stock?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    created_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => cart_itemsOrderByRelationAggregateInput, {nullable:true})
    @Type(() => cart_itemsOrderByRelationAggregateInput)
    cart_items?: cart_itemsOrderByRelationAggregateInput;

    @Field(() => order_itemsOrderByRelationAggregateInput, {nullable:true})
    @Type(() => order_itemsOrderByRelationAggregateInput)
    order_items?: order_itemsOrderByRelationAggregateInput;

    @Field(() => product_categoriesOrderByRelationAggregateInput, {nullable:true})
    @Type(() => product_categoriesOrderByRelationAggregateInput)
    product_categories?: product_categoriesOrderByRelationAggregateInput;
}
