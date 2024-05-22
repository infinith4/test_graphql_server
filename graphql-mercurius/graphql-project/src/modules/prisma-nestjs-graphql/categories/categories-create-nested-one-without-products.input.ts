import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesCreateWithoutProductsInput } from './categories-create-without-products.input';
import { Type } from 'class-transformer';
import { categoriesCreateOrConnectWithoutProductsInput } from './categories-create-or-connect-without-products.input';
import { Prisma } from '@prisma/client';
import { categoriesWhereUniqueInput } from './categories-where-unique.input';

@InputType()
export class categoriesCreateNestedOneWithoutProductsInput {

    @Field(() => categoriesCreateWithoutProductsInput, {nullable:true})
    @Type(() => categoriesCreateWithoutProductsInput)
    create?: categoriesCreateWithoutProductsInput;

    @Field(() => categoriesCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => categoriesCreateOrConnectWithoutProductsInput)
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput;

    @Field(() => categoriesWhereUniqueInput, {nullable:true})
    @Type(() => categoriesWhereUniqueInput)
    connect?: Prisma.AtLeast<categoriesWhereUniqueInput, 'id'>;
}
