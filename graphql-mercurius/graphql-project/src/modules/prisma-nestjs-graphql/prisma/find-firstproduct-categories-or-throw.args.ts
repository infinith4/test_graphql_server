import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { product_categoriesWhereInput } from '../product-categories/product-categories-where.input';
import { Type } from 'class-transformer';
import { product_categoriesOrderByWithRelationInput } from '../product-categories/product-categories-order-by-with-relation.input';
import { product_categoriesWhereUniqueInput } from '../product-categories/product-categories-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Product_categoriesScalarFieldEnum } from './product-categories-scalar-field.enum';

@ArgsType()
export class FindFirstproductCategoriesOrThrowArgs {

    @Field(() => product_categoriesWhereInput, {nullable:true})
    @Type(() => product_categoriesWhereInput)
    where?: product_categoriesWhereInput;

    @Field(() => [product_categoriesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<product_categoriesOrderByWithRelationInput>;

    @Field(() => product_categoriesWhereUniqueInput, {nullable:true})
    cursor?: product_categoriesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Product_categoriesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Product_categoriesScalarFieldEnum>;
}
