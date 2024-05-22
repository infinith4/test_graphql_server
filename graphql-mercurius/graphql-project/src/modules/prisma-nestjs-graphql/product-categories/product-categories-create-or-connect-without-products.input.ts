import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { product_categoriesWhereUniqueInput } from './product-categories-where-unique.input';
import { Type } from 'class-transformer';
import { product_categoriesCreateWithoutProductsInput } from './product-categories-create-without-products.input';

@InputType()
export class product_categoriesCreateOrConnectWithoutProductsInput {

    @Field(() => product_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => product_categoriesWhereUniqueInput)
    where!: Prisma.AtLeast<product_categoriesWhereUniqueInput, 'product_id_category_id'>;

    @Field(() => product_categoriesCreateWithoutProductsInput, {nullable:false})
    @Type(() => product_categoriesCreateWithoutProductsInput)
    create!: product_categoriesCreateWithoutProductsInput;
}
