import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Product_categoriesAvgAggregate {

    @Field(() => Float, {nullable:true})
    product_id?: number;

    @Field(() => Float, {nullable:true})
    category_id?: number;
}
