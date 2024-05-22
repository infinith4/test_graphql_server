import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { cartsOrderByWithRelationInput } from '../carts/carts-order-by-with-relation.input';
import { productsOrderByWithRelationInput } from '../products/products-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class cart_itemsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    cart_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    product_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    created_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => cartsOrderByWithRelationInput, {nullable:true})
    carts?: cartsOrderByWithRelationInput;

    @Field(() => productsOrderByWithRelationInput, {nullable:true})
    @Type(() => productsOrderByWithRelationInput)
    products?: productsOrderByWithRelationInput;
}
