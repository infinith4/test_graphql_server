import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class product_categoriesUncheckedCreateWithoutCategoriesInput {

    @Field(() => Int, {nullable:false})
    product_id!: number;
}
