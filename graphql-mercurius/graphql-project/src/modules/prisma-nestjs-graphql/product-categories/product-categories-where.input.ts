import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { CategoriesRelationFilter } from '../prisma/categories-relation-filter.input';
import { ProductsRelationFilter } from '../prisma/products-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class product_categoriesWhereInput {

    @Field(() => [product_categoriesWhereInput], {nullable:true})
    AND?: Array<product_categoriesWhereInput>;

    @Field(() => [product_categoriesWhereInput], {nullable:true})
    OR?: Array<product_categoriesWhereInput>;

    @Field(() => [product_categoriesWhereInput], {nullable:true})
    NOT?: Array<product_categoriesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    product_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    category_id?: IntFilter;

    @Field(() => CategoriesRelationFilter, {nullable:true})
    categories?: CategoriesRelationFilter;

    @Field(() => ProductsRelationFilter, {nullable:true})
    @Type(() => ProductsRelationFilter)
    products?: ProductsRelationFilter;
}
