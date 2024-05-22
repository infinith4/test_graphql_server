import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ProductCategory } from '../../product-categories_module/entities/product-category.entity';
import { CategoryCount } from '../entities/categories-count.output';

@ObjectType()
export class Category {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    created_at!: Date | null;

    @Field(() => Date, {nullable:true})
    updated_at!: Date | null;

    @Field(() => [ProductCategory], {nullable:true})
    product_categories?: Array<ProductCategory>;

    @Field(() => CategoryCount, {nullable:false})
    _count?: CategoryCount;
}
