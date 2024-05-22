import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { categoriesWhereUniqueInput } from './categories-where-unique.input';
import { Type } from 'class-transformer';
import { categoriesUpdateWithoutCategoriesInput } from './categories-update-without-categories.input';
import { categoriesCreateWithoutCategoriesInput } from './categories-create-without-categories.input';

@InputType()
export class categoriesUpsertWithWhereUniqueWithoutCategoriesInput {

    @Field(() => categoriesWhereUniqueInput, {nullable:false})
    @Type(() => categoriesWhereUniqueInput)
    where!: Prisma.AtLeast<categoriesWhereUniqueInput, 'id'>;

    @Field(() => categoriesUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => categoriesUpdateWithoutCategoriesInput)
    update!: categoriesUpdateWithoutCategoriesInput;

    @Field(() => categoriesCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => categoriesCreateWithoutCategoriesInput)
    create!: categoriesCreateWithoutCategoriesInput;
}
