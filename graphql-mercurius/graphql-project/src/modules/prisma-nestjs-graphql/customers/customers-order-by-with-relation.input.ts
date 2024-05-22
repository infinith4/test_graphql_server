import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { customer_addressesOrderByRelationAggregateInput } from '../customer-addresses/customer-addresses-order-by-relation-aggregate.input';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class customersOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    address?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    phone?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    created_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => customer_addressesOrderByRelationAggregateInput, {nullable:true})
    customer_addresses?: customer_addressesOrderByRelationAggregateInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    @Type(() => usersOrderByWithRelationInput)
    users?: usersOrderByWithRelationInput;
}
