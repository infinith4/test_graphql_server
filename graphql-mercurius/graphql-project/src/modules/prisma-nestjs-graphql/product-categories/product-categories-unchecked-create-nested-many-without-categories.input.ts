import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { product_categoriesCreateWithoutCategoriesInput } from './product-categories-create-without-categories.input';
import { Type } from 'class-transformer';
import { product_categoriesCreateOrConnectWithoutCategoriesInput } from './product-categories-create-or-connect-without-categories.input';
import { product_categoriesCreateManyCategoriesInputEnvelope } from './product-categories-create-many-categories-input-envelope.input';
import { Prisma } from '@prisma/client';
import { product_categoriesWhereUniqueInput } from './product-categories-where-unique.input';

@InputType()
export class product_categoriesUncheckedCreateNestedManyWithoutCategoriesInput {

    @Field(() => [product_categoriesCreateWithoutCategoriesInput], {nullable:true})
    @Type(() => product_categoriesCreateWithoutCategoriesInput)
    create?: Array<product_categoriesCreateWithoutCategoriesInput>;

    @Field(() => [product_categoriesCreateOrConnectWithoutCategoriesInput], {nullable:true})
    @Type(() => product_categoriesCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: Array<product_categoriesCreateOrConnectWithoutCategoriesInput>;

    @Field(() => product_categoriesCreateManyCategoriesInputEnvelope, {nullable:true})
    @Type(() => product_categoriesCreateManyCategoriesInputEnvelope)
    createMany?: product_categoriesCreateManyCategoriesInputEnvelope;

    @Field(() => [product_categoriesWhereUniqueInput], {nullable:true})
    @Type(() => product_categoriesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<product_categoriesWhereUniqueInput, 'product_id_category_id'>>;
}
