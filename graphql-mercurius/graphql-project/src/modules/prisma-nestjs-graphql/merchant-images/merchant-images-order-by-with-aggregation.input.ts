import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { merchant_imagesCountOrderByAggregateInput } from './merchant-images-count-order-by-aggregate.input';
import { merchant_imagesAvgOrderByAggregateInput } from './merchant-images-avg-order-by-aggregate.input';
import { merchant_imagesMaxOrderByAggregateInput } from './merchant-images-max-order-by-aggregate.input';
import { merchant_imagesMinOrderByAggregateInput } from './merchant-images-min-order-by-aggregate.input';
import { merchant_imagesSumOrderByAggregateInput } from './merchant-images-sum-order-by-aggregate.input';

@InputType()
export class merchant_imagesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    url?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    merchant_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => merchant_imagesCountOrderByAggregateInput, {nullable:true})
    _count?: merchant_imagesCountOrderByAggregateInput;

    @Field(() => merchant_imagesAvgOrderByAggregateInput, {nullable:true})
    _avg?: merchant_imagesAvgOrderByAggregateInput;

    @Field(() => merchant_imagesMaxOrderByAggregateInput, {nullable:true})
    _max?: merchant_imagesMaxOrderByAggregateInput;

    @Field(() => merchant_imagesMinOrderByAggregateInput, {nullable:true})
    _min?: merchant_imagesMinOrderByAggregateInput;

    @Field(() => merchant_imagesSumOrderByAggregateInput, {nullable:true})
    _sum?: merchant_imagesSumOrderByAggregateInput;
}
