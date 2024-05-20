import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Category } from '../../categories/entities/category.entity';
import { Product } from '../../products/entities/product.entity';

@ObjectType()
export class ProductCategory {

    @Field(() => Int, {nullable:false})
    product_id!: number;

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => Category, {nullable:false})
    categories?: Category;

    @Field(() => Product, {nullable:false})
    products?: Product;
}
