import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { product_categoriesUncheckedUpdateManyInput } from '../product-categories/product-categories-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { product_categoriesWhereInput } from '../product-categories/product-categories-where.input';

@ArgsType()
export class UpdateManyproductCategoriesArgs {

    @Field(() => product_categoriesUncheckedUpdateManyInput, {nullable:false})
    @Type(() => product_categoriesUncheckedUpdateManyInput)
    data!: product_categoriesUncheckedUpdateManyInput;

    @Field(() => product_categoriesWhereInput, {nullable:true})
    @Type(() => product_categoriesWhereInput)
    where?: product_categoriesWhereInput;
}
