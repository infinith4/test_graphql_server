import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { cart_itemsOrderByRelationAggregateInput } from '../cart-items/cart-items-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';

@InputType()
export class cartsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    user_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    created_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => cart_itemsOrderByRelationAggregateInput, {nullable:true})
    @Type(() => cart_itemsOrderByRelationAggregateInput)
    cart_items?: cart_itemsOrderByRelationAggregateInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    @Type(() => usersOrderByWithRelationInput)
    users?: usersOrderByWithRelationInput;
}
