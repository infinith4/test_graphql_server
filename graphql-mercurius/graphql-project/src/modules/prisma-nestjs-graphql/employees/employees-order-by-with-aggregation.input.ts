import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { employeesCountOrderByAggregateInput } from './employees-count-order-by-aggregate.input';
import { employeesAvgOrderByAggregateInput } from './employees-avg-order-by-aggregate.input';
import { employeesMaxOrderByAggregateInput } from './employees-max-order-by-aggregate.input';
import { employeesMinOrderByAggregateInput } from './employees-min-order-by-aggregate.input';
import { employeesSumOrderByAggregateInput } from './employees-sum-order-by-aggregate.input';

@InputType()
export class employeesOrderByWithAggregationInput {

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

    @Field(() => employeesCountOrderByAggregateInput, {nullable:true})
    _count?: employeesCountOrderByAggregateInput;

    @Field(() => employeesAvgOrderByAggregateInput, {nullable:true})
    _avg?: employeesAvgOrderByAggregateInput;

    @Field(() => employeesMaxOrderByAggregateInput, {nullable:true})
    _max?: employeesMaxOrderByAggregateInput;

    @Field(() => employeesMinOrderByAggregateInput, {nullable:true})
    _min?: employeesMinOrderByAggregateInput;

    @Field(() => employeesSumOrderByAggregateInput, {nullable:true})
    _sum?: employeesSumOrderByAggregateInput;
}
