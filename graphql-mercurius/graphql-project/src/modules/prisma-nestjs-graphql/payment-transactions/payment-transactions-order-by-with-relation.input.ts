import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ordersOrderByWithRelationInput } from '../orders/orders-order-by-with-relation.input';

@InputType()
export class payment_transactionsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order_id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    amount?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    status?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    payment_method?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transaction_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => ordersOrderByWithRelationInput, {nullable:true})
    orders?: ordersOrderByWithRelationInput;
}
