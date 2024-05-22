import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class product_categoriesCreateManyCategoriesInput {

    @Field(() => Int, {nullable:false})
    product_id!: number;
}
