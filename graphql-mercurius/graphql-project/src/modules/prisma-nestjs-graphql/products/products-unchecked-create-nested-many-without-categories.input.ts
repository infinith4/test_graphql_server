import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsCreateWithoutCategoriesInput } from './products-create-without-categories.input';
import { Type } from 'class-transformer';
import { productsCreateOrConnectWithoutCategoriesInput } from './products-create-or-connect-without-categories.input';
import { productsCreateManyCategoriesInputEnvelope } from './products-create-many-categories-input-envelope.input';
import { Prisma } from '@prisma/client';
import { productsWhereUniqueInput } from './products-where-unique.input';

@InputType()
export class productsUncheckedCreateNestedManyWithoutCategoriesInput {

    @Field(() => [productsCreateWithoutCategoriesInput], {nullable:true})
    @Type(() => productsCreateWithoutCategoriesInput)
    create?: Array<productsCreateWithoutCategoriesInput>;

    @Field(() => [productsCreateOrConnectWithoutCategoriesInput], {nullable:true})
    @Type(() => productsCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: Array<productsCreateOrConnectWithoutCategoriesInput>;

    @Field(() => productsCreateManyCategoriesInputEnvelope, {nullable:true})
    @Type(() => productsCreateManyCategoriesInputEnvelope)
    createMany?: productsCreateManyCategoriesInputEnvelope;

    @Field(() => [productsWhereUniqueInput], {nullable:true})
    @Type(() => productsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<productsWhereUniqueInput, 'id'>>;
}
