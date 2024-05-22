import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Product_categoriesMaxAggregate {

    @Field(() => Int, {nullable:true})
    product_id?: number;

    @Field(() => Int, {nullable:true})
    category_id?: number;
}
