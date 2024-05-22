import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesCreateWithoutCategoriesInput } from './categories-create-without-categories.input';
import { Type } from 'class-transformer';
import { categoriesCreateOrConnectWithoutCategoriesInput } from './categories-create-or-connect-without-categories.input';
import { categoriesCreateManyCategoriesInputEnvelope } from './categories-create-many-categories-input-envelope.input';
import { Prisma } from '@prisma/client';
import { categoriesWhereUniqueInput } from './categories-where-unique.input';

@InputType()
export class categoriesUncheckedCreateNestedManyWithoutCategoriesInput {

    @Field(() => [categoriesCreateWithoutCategoriesInput], {nullable:true})
    @Type(() => categoriesCreateWithoutCategoriesInput)
    create?: Array<categoriesCreateWithoutCategoriesInput>;

    @Field(() => [categoriesCreateOrConnectWithoutCategoriesInput], {nullable:true})
    @Type(() => categoriesCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: Array<categoriesCreateOrConnectWithoutCategoriesInput>;

    @Field(() => categoriesCreateManyCategoriesInputEnvelope, {nullable:true})
    @Type(() => categoriesCreateManyCategoriesInputEnvelope)
    createMany?: categoriesCreateManyCategoriesInputEnvelope;

    @Field(() => [categoriesWhereUniqueInput], {nullable:true})
    @Type(() => categoriesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<categoriesWhereUniqueInput, 'id'>>;
}
