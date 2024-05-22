import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { product_categoriesOrderByRelationAggregateInput } from '../product-categories/product-categories-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';

@InputType()
export class categoriesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    created_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => product_categoriesOrderByRelationAggregateInput, {nullable:true})
    @Type(() => product_categoriesOrderByRelationAggregateInput)
    product_categories?: product_categoriesOrderByRelationAggregateInput;
}
