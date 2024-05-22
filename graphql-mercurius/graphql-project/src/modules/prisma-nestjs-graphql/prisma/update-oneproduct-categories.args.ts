import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { product_categoriesUpdateInput } from '../product-categories/product-categories-update.input';
import { Type } from 'class-transformer';
import { product_categoriesWhereUniqueInput } from '../product-categories/product-categories-where-unique.input';

@ArgsType()
export class UpdateOneproductCategoriesArgs {

    @Field(() => product_categoriesUpdateInput, {nullable:false})
    @Type(() => product_categoriesUpdateInput)
    data!: product_categoriesUpdateInput;

    @Field(() => product_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => product_categoriesWhereUniqueInput)
    where!: product_categoriesWhereUniqueInput;
}
