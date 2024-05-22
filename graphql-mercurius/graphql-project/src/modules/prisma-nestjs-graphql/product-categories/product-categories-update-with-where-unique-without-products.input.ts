import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { product_categoriesWhereUniqueInput } from './product-categories-where-unique.input';
import { Type } from 'class-transformer';
import { product_categoriesUpdateWithoutProductsInput } from './product-categories-update-without-products.input';

@InputType()
export class product_categoriesUpdateWithWhereUniqueWithoutProductsInput {

    @Field(() => product_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => product_categoriesWhereUniqueInput)
    where!: Prisma.AtLeast<product_categoriesWhereUniqueInput, 'product_id_category_id'>;

    @Field(() => product_categoriesUpdateWithoutProductsInput, {nullable:false})
    @Type(() => product_categoriesUpdateWithoutProductsInput)
    data!: product_categoriesUpdateWithoutProductsInput;
}
