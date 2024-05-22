import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { order_itemsOrderByRelationAggregateInput } from '../order-items/order-items-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { paymentsOrderByRelationAggregateInput } from '../payments/payments-order-by-relation-aggregate.input';

@InputType()
export class ordersOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    user_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    total?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    created_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => order_itemsOrderByRelationAggregateInput, {nullable:true})
    @Type(() => order_itemsOrderByRelationAggregateInput)
    order_items?: order_itemsOrderByRelationAggregateInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    @Type(() => usersOrderByWithRelationInput)
    users?: usersOrderByWithRelationInput;

    @Field(() => paymentsOrderByRelationAggregateInput, {nullable:true})
    @Type(() => paymentsOrderByRelationAggregateInput)
    payments?: paymentsOrderByRelationAggregateInput;
}
