import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { product_categoriesWhereInput } from '../product-categories/product-categories-where.input';
import { Type } from 'class-transformer';
import { product_categoriesOrderByWithAggregationInput } from '../product-categories/product-categories-order-by-with-aggregation.input';
import { Product_categoriesScalarFieldEnum } from './product-categories-scalar-field.enum';
import { product_categoriesScalarWhereWithAggregatesInput } from '../product-categories/product-categories-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByproductCategoriesArgs {

    @Field(() => product_categoriesWhereInput, {nullable:true})
    @Type(() => product_categoriesWhereInput)
    where?: product_categoriesWhereInput;

    @Field(() => [product_categoriesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<product_categoriesOrderByWithAggregationInput>;

    @Field(() => [Product_categoriesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Product_categoriesScalarFieldEnum>;

    @Field(() => product_categoriesScalarWhereWithAggregatesInput, {nullable:true})
    having?: product_categoriesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
