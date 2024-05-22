import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { productsWhereUniqueInput } from './products-where-unique.input';
import { Type } from 'class-transformer';
import { productsUpdateWithoutCategoriesInput } from './products-update-without-categories.input';
import { productsCreateWithoutCategoriesInput } from './products-create-without-categories.input';

@InputType()
export class productsUpsertWithWhereUniqueWithoutCategoriesInput {

    @Field(() => productsWhereUniqueInput, {nullable:false})
    @Type(() => productsWhereUniqueInput)
    where!: Prisma.AtLeast<productsWhereUniqueInput, 'id'>;

    @Field(() => productsUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => productsUpdateWithoutCategoriesInput)
    update!: productsUpdateWithoutCategoriesInput;

    @Field(() => productsCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => productsCreateWithoutCategoriesInput)
    create!: productsCreateWithoutCategoriesInput;
}
