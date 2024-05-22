import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { product_categoriesCountOrderByAggregateInput } from './product-categories-count-order-by-aggregate.input';
import { product_categoriesAvgOrderByAggregateInput } from './product-categories-avg-order-by-aggregate.input';
import { product_categoriesMaxOrderByAggregateInput } from './product-categories-max-order-by-aggregate.input';
import { product_categoriesMinOrderByAggregateInput } from './product-categories-min-order-by-aggregate.input';
import { product_categoriesSumOrderByAggregateInput } from './product-categories-sum-order-by-aggregate.input';

@InputType()
export class product_categoriesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    product_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category_id?: keyof typeof SortOrder;

    @Field(() => product_categoriesCountOrderByAggregateInput, {nullable:true})
    _count?: product_categoriesCountOrderByAggregateInput;

    @Field(() => product_categoriesAvgOrderByAggregateInput, {nullable:true})
    _avg?: product_categoriesAvgOrderByAggregateInput;

    @Field(() => product_categoriesMaxOrderByAggregateInput, {nullable:true})
    _max?: product_categoriesMaxOrderByAggregateInput;

    @Field(() => product_categoriesMinOrderByAggregateInput, {nullable:true})
    _min?: product_categoriesMinOrderByAggregateInput;

    @Field(() => product_categoriesSumOrderByAggregateInput, {nullable:true})
    _sum?: product_categoriesSumOrderByAggregateInput;
}
