import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesCreateWithoutProduct_categoriesInput } from './categories-create-without-product-categories.input';
import { Type } from 'class-transformer';
import { categoriesCreateOrConnectWithoutProduct_categoriesInput } from './categories-create-or-connect-without-product-categories.input';
import { Prisma } from '@prisma/client';
import { categoriesWhereUniqueInput } from './categories-where-unique.input';

@InputType()
export class categoriesCreateNestedOneWithoutProduct_categoriesInput {

    @Field(() => categoriesCreateWithoutProduct_categoriesInput, {nullable:true})
    @Type(() => categoriesCreateWithoutProduct_categoriesInput)
    create?: categoriesCreateWithoutProduct_categoriesInput;

    @Field(() => categoriesCreateOrConnectWithoutProduct_categoriesInput, {nullable:true})
    @Type(() => categoriesCreateOrConnectWithoutProduct_categoriesInput)
    connectOrCreate?: categoriesCreateOrConnectWithoutProduct_categoriesInput;

    @Field(() => categoriesWhereUniqueInput, {nullable:true})
    @Type(() => categoriesWhereUniqueInput)
    connect?: Prisma.AtLeast<categoriesWhereUniqueInput, 'id' | 'name'>;
}
