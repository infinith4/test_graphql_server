import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Category } from '../../categories_module/entities/category.entity';
import { Product } from '../../products_module/entities/product.entity';

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
