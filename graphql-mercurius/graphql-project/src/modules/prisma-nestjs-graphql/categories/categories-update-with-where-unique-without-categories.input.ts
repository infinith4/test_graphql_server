import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { categoriesWhereUniqueInput } from './categories-where-unique.input';
import { Type } from 'class-transformer';
import { categoriesUpdateWithoutCategoriesInput } from './categories-update-without-categories.input';

@InputType()
export class categoriesUpdateWithWhereUniqueWithoutCategoriesInput {

    @Field(() => categoriesWhereUniqueInput, {nullable:false})
    @Type(() => categoriesWhereUniqueInput)
    where!: Prisma.AtLeast<categoriesWhereUniqueInput, 'id'>;

    @Field(() => categoriesUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => categoriesUpdateWithoutCategoriesInput)
    data!: categoriesUpdateWithoutCategoriesInput;
}
