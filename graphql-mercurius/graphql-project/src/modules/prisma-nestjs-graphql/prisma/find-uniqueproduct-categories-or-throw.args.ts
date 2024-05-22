import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { product_categoriesWhereUniqueInput } from '../product-categories/product-categories-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueproductCategoriesOrThrowArgs {

    @Field(() => product_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => product_categoriesWhereUniqueInput)
    where!: product_categoriesWhereUniqueInput;
}
