import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { product_categoriesWhereInput } from '../product-categories/product-categories-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyproductCategoriesArgs {

    @Field(() => product_categoriesWhereInput, {nullable:true})
    @Type(() => product_categoriesWhereInput)
    where?: product_categoriesWhereInput;
}
