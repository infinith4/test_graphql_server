import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { productsCountOrderByAggregateInput } from './products-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { productsAvgOrderByAggregateInput } from './products-avg-order-by-aggregate.input';
import { productsMaxOrderByAggregateInput } from './products-max-order-by-aggregate.input';
import { productsMinOrderByAggregateInput } from './products-min-order-by-aggregate.input';
import { productsSumOrderByAggregateInput } from './products-sum-order-by-aggregate.input';

@InputType()
export class productsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    status?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stock?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    created_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => productsCountOrderByAggregateInput, {nullable:true})
    @Type(() => productsCountOrderByAggregateInput)
    _count?: productsCountOrderByAggregateInput;

    @Field(() => productsAvgOrderByAggregateInput, {nullable:true})
    @Type(() => productsAvgOrderByAggregateInput)
    _avg?: productsAvgOrderByAggregateInput;

    @Field(() => productsMaxOrderByAggregateInput, {nullable:true})
    @Type(() => productsMaxOrderByAggregateInput)
    _max?: productsMaxOrderByAggregateInput;

    @Field(() => productsMinOrderByAggregateInput, {nullable:true})
    @Type(() => productsMinOrderByAggregateInput)
    _min?: productsMinOrderByAggregateInput;

    @Field(() => productsSumOrderByAggregateInput, {nullable:true})
    @Type(() => productsSumOrderByAggregateInput)
    _sum?: productsSumOrderByAggregateInput;
}
