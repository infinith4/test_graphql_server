import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { countriesCountOrderByAggregateInput } from './countries-count-order-by-aggregate.input';
import { countriesAvgOrderByAggregateInput } from './countries-avg-order-by-aggregate.input';
import { countriesMaxOrderByAggregateInput } from './countries-max-order-by-aggregate.input';
import { countriesMinOrderByAggregateInput } from './countries-min-order-by-aggregate.input';
import { countriesSumOrderByAggregateInput } from './countries-sum-order-by-aggregate.input';

@InputType()
export class countriesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    name?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    continent_code?: SortOrderInput;

    @Field(() => countriesCountOrderByAggregateInput, {nullable:true})
    _count?: countriesCountOrderByAggregateInput;

    @Field(() => countriesAvgOrderByAggregateInput, {nullable:true})
    _avg?: countriesAvgOrderByAggregateInput;

    @Field(() => countriesMaxOrderByAggregateInput, {nullable:true})
    _max?: countriesMaxOrderByAggregateInput;

    @Field(() => countriesMinOrderByAggregateInput, {nullable:true})
    _min?: countriesMinOrderByAggregateInput;

    @Field(() => countriesSumOrderByAggregateInput, {nullable:true})
    _sum?: countriesSumOrderByAggregateInput;
}
