import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { product_categoriesCreateManyInput } from '../product-categories/product-categories-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyproductCategoriesArgs {

    @Field(() => [product_categoriesCreateManyInput], {nullable:false})
    @Type(() => product_categoriesCreateManyInput)
    data!: Array<product_categoriesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
