import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { product_categories } from '../../product-categories/entities/product-category.entity';
import { CategoriesCount } from '../../categories/entities/categories-count.output';

@ObjectType()
export class categories {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    created_at!: Date | null;

    @Field(() => Date, {nullable:true})
    updated_at!: Date | null;

    @Field(() => [product_categories], {nullable:true})
    product_categories?: Array<product_categories>;

    @Field(() => CategoriesCount, {nullable:false})
    _count?: CategoriesCount;
}
