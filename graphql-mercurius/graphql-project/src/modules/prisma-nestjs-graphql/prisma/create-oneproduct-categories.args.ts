import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { product_categoriesCreateInput } from '../product-categories/product-categories-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneproductCategoriesArgs {

    @Field(() => product_categoriesCreateInput, {nullable:false})
    @Type(() => product_categoriesCreateInput)
    data!: product_categoriesCreateInput;
}
