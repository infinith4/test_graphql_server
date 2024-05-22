import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { product_categoriesWhereUniqueInput } from '../product-categories/product-categories-where-unique.input';
import { Type } from 'class-transformer';
import { product_categoriesCreateInput } from '../product-categories/product-categories-create.input';
import { product_categoriesUpdateInput } from '../product-categories/product-categories-update.input';

@ArgsType()
export class UpsertOneproductCategoriesArgs {

    @Field(() => product_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => product_categoriesWhereUniqueInput)
    where!: product_categoriesWhereUniqueInput;

    @Field(() => product_categoriesCreateInput, {nullable:false})
    @Type(() => product_categoriesCreateInput)
    create!: product_categoriesCreateInput;

    @Field(() => product_categoriesUpdateInput, {nullable:false})
    @Type(() => product_categoriesUpdateInput)
    update!: product_categoriesUpdateInput;
}
