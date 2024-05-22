import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { categoriesWhereUniqueInput } from './categories-where-unique.input';
import { Type } from 'class-transformer';
import { categoriesCreateWithoutProduct_categoriesInput } from './categories-create-without-product-categories.input';

@InputType()
export class categoriesCreateOrConnectWithoutProduct_categoriesInput {

    @Field(() => categoriesWhereUniqueInput, {nullable:false})
    @Type(() => categoriesWhereUniqueInput)
    where!: Prisma.AtLeast<categoriesWhereUniqueInput, 'id' | 'name'>;

    @Field(() => categoriesCreateWithoutProduct_categoriesInput, {nullable:false})
    @Type(() => categoriesCreateWithoutProduct_categoriesInput)
    create!: categoriesCreateWithoutProduct_categoriesInput;
}
