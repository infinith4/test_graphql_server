import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ordersOrderByWithRelationInput } from '../orders/orders-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class paymentsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    order_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    payment_method?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    payment_status?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    created_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => ordersOrderByWithRelationInput, {nullable:true})
    @Type(() => ordersOrderByWithRelationInput)
    orders?: ordersOrderByWithRelationInput;
}
