import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { customersOrderByRelationAggregateInput } from '../customers/customers-order-by-relation-aggregate.input';

@InputType()
export class employeesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    first_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    last_name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    title?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    birth_date?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    hire_date?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    address?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    city?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    state?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    country_code?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    postal_code?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    phone_number?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    email?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    area_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => customersOrderByRelationAggregateInput, {nullable:true})
    customers?: customersOrderByRelationAggregateInput;
}
