import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { product_categoriesWhereUniqueInput } from './product-categories-where-unique.input';
import { Type } from 'class-transformer';
import { product_categoriesUpdateWithoutCategoriesInput } from './product-categories-update-without-categories.input';
import { product_categoriesCreateWithoutCategoriesInput } from './product-categories-create-without-categories.input';

@InputType()
export class product_categoriesUpsertWithWhereUniqueWithoutCategoriesInput {

    @Field(() => product_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => product_categoriesWhereUniqueInput)
    where!: Prisma.AtLeast<product_categoriesWhereUniqueInput, 'product_id_category_id'>;

    @Field(() => product_categoriesUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => product_categoriesUpdateWithoutCategoriesInput)
    update!: product_categoriesUpdateWithoutCategoriesInput;

    @Field(() => product_categoriesCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => product_categoriesCreateWithoutCategoriesInput)
    create!: product_categoriesCreateWithoutCategoriesInput;
}
