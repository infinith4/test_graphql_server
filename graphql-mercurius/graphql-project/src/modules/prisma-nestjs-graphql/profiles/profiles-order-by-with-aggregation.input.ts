import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { profilesCountOrderByAggregateInput } from './profiles-count-order-by-aggregate.input';
import { profilesAvgOrderByAggregateInput } from './profiles-avg-order-by-aggregate.input';
import { profilesMaxOrderByAggregateInput } from './profiles-max-order-by-aggregate.input';
import { profilesMinOrderByAggregateInput } from './profiles-min-order-by-aggregate.input';
import { profilesSumOrderByAggregateInput } from './profiles-sum-order-by-aggregate.input';

@InputType()
export class profilesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    user_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    bio?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    website?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    email?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => profilesCountOrderByAggregateInput, {nullable:true})
    _count?: profilesCountOrderByAggregateInput;

    @Field(() => profilesAvgOrderByAggregateInput, {nullable:true})
    _avg?: profilesAvgOrderByAggregateInput;

    @Field(() => profilesMaxOrderByAggregateInput, {nullable:true})
    _max?: profilesMaxOrderByAggregateInput;

    @Field(() => profilesMinOrderByAggregateInput, {nullable:true})
    _min?: profilesMinOrderByAggregateInput;

    @Field(() => profilesSumOrderByAggregateInput, {nullable:true})
    _sum?: profilesSumOrderByAggregateInput;
}
