import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CategoriesCount {

    @Field(() => Int, {nullable:false})
    product_categories!: number;
}
