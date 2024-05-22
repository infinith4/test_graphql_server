import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class product_categoriesCreateManyProductsInput {

    @Field(() => Int, {nullable:false})
    category_id!: number;
}
