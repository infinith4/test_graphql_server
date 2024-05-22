import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { product_categoriesWhereUniqueInput } from './product-categories-where-unique.input';
import { Type } from 'class-transformer';
import { product_categoriesUpdateWithoutCategoriesInput } from './product-categories-update-without-categories.input';

@InputType()
export class product_categoriesUpdateWithWhereUniqueWithoutCategoriesInput {

    @Field(() => product_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => product_categoriesWhereUniqueInput)
    where!: Prisma.AtLeast<product_categoriesWhereUniqueInput, 'product_id_category_id'>;

    @Field(() => product_categoriesUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => product_categoriesUpdateWithoutCategoriesInput)
    data!: product_categoriesUpdateWithoutCategoriesInput;
}
