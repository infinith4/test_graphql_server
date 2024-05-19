import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { categories } from '../../categories/entities/category.entity';
import { products } from '../../products/entities/product.entity';

@ObjectType()
export class product_categories {

    @Field(() => Int, {nullable:false})
    product_id!: number;

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => categories, {nullable:false})
    categories?: categories;

    @Field(() => products, {nullable:false})
    products?: products;
}
