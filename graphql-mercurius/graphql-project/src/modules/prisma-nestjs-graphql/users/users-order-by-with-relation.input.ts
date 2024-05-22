import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { articlesOrderByRelationAggregateInput } from '../articles/articles-order-by-relation-aggregate.input';
import { cartsOrderByRelationAggregateInput } from '../carts/carts-order-by-relation-aggregate.input';
import { customersOrderByWithRelationInput } from '../customers/customers-order-by-with-relation.input';
import { ordersOrderByRelationAggregateInput } from '../orders/orders-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';

@InputType()
export class usersOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hashed_password?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    created_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => articlesOrderByRelationAggregateInput, {nullable:true})
    articles?: articlesOrderByRelationAggregateInput;

    @Field(() => cartsOrderByRelationAggregateInput, {nullable:true})
    carts?: cartsOrderByRelationAggregateInput;

    @Field(() => customersOrderByWithRelationInput, {nullable:true})
    customers?: customersOrderByWithRelationInput;

    @Field(() => ordersOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ordersOrderByRelationAggregateInput)
    orders?: ordersOrderByRelationAggregateInput;
}
