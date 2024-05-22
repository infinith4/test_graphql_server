import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { usersCountOrderByAggregateInput } from './users-count-order-by-aggregate.input';
import { usersAvgOrderByAggregateInput } from './users-avg-order-by-aggregate.input';
import { usersMaxOrderByAggregateInput } from './users-max-order-by-aggregate.input';
import { usersMinOrderByAggregateInput } from './users-min-order-by-aggregate.input';
import { usersSumOrderByAggregateInput } from './users-sum-order-by-aggregate.input';

@InputType()
export class usersOrderByWithAggregationInput {

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

    @Field(() => usersCountOrderByAggregateInput, {nullable:true})
    _count?: usersCountOrderByAggregateInput;

    @Field(() => usersAvgOrderByAggregateInput, {nullable:true})
    _avg?: usersAvgOrderByAggregateInput;

    @Field(() => usersMaxOrderByAggregateInput, {nullable:true})
    _max?: usersMaxOrderByAggregateInput;

    @Field(() => usersMinOrderByAggregateInput, {nullable:true})
    _min?: usersMinOrderByAggregateInput;

    @Field(() => usersSumOrderByAggregateInput, {nullable:true})
    _sum?: usersSumOrderByAggregateInput;
}
