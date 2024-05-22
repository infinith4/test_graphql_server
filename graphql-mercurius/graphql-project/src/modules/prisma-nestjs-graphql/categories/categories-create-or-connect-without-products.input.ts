import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { categoriesWhereUniqueInput } from './categories-where-unique.input';
import { Type } from 'class-transformer';
import { categoriesCreateWithoutProductsInput } from './categories-create-without-products.input';

@InputType()
export class categoriesCreateOrConnectWithoutProductsInput {

    @Field(() => categoriesWhereUniqueInput, {nullable:false})
    @Type(() => categoriesWhereUniqueInput)
    where!: Prisma.AtLeast<categoriesWhereUniqueInput, 'id'>;

    @Field(() => categoriesCreateWithoutProductsInput, {nullable:false})
    @Type(() => categoriesCreateWithoutProductsInput)
    create!: categoriesCreateWithoutProductsInput;
}
