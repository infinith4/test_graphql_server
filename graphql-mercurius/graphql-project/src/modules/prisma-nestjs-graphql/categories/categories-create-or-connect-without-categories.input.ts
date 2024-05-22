import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { categoriesWhereUniqueInput } from './categories-where-unique.input';
import { Type } from 'class-transformer';
import { categoriesCreateWithoutCategoriesInput } from './categories-create-without-categories.input';

@InputType()
export class categoriesCreateOrConnectWithoutCategoriesInput {

    @Field(() => categoriesWhereUniqueInput, {nullable:false})
    @Type(() => categoriesWhereUniqueInput)
    where!: Prisma.AtLeast<categoriesWhereUniqueInput, 'id'>;

    @Field(() => categoriesCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => categoriesCreateWithoutCategoriesInput)
    create!: categoriesCreateWithoutCategoriesInput;
}
