import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { product_categoriesWhereUniqueInput } from './product-categories-where-unique.input';
import { Type } from 'class-transformer';
import { product_categoriesUpdateWithoutProductsInput } from './product-categories-update-without-products.input';
import { product_categoriesCreateWithoutProductsInput } from './product-categories-create-without-products.input';

@InputType()
export class product_categoriesUpsertWithWhereUniqueWithoutProductsInput {

    @Field(() => product_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => product_categoriesWhereUniqueInput)
    where!: Prisma.AtLeast<product_categoriesWhereUniqueInput, 'product_id_category_id'>;

    @Field(() => product_categoriesUpdateWithoutProductsInput, {nullable:false})
    @Type(() => product_categoriesUpdateWithoutProductsInput)
    update!: product_categoriesUpdateWithoutProductsInput;

    @Field(() => product_categoriesCreateWithoutProductsInput, {nullable:false})
    @Type(() => product_categoriesCreateWithoutProductsInput)
    create!: product_categoriesCreateWithoutProductsInput;
}
