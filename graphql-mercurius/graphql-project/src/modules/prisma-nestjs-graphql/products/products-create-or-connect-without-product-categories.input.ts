import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { productsWhereUniqueInput } from './products-where-unique.input';
import { Type } from 'class-transformer';
import { productsCreateWithoutProduct_categoriesInput } from './products-create-without-product-categories.input';

@InputType()
export class productsCreateOrConnectWithoutProduct_categoriesInput {

    @Field(() => productsWhereUniqueInput, {nullable:false})
    @Type(() => productsWhereUniqueInput)
    where!: Prisma.AtLeast<productsWhereUniqueInput, 'id'>;

    @Field(() => productsCreateWithoutProduct_categoriesInput, {nullable:false})
    @Type(() => productsCreateWithoutProduct_categoriesInput)
    create!: productsCreateWithoutProduct_categoriesInput;
}
