import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { customersOrderByWithRelationInput } from '../customers/customers-order-by-with-relation.input';

@InputType()
export class customer_addressesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customer_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address_line1?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    address_line2?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    city?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    state?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    postal_code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    country?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    created_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => customersOrderByWithRelationInput, {nullable:true})
    customers?: customersOrderByWithRelationInput;
}
