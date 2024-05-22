import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { product_categoriesCreateWithoutCategoriesInput } from './product-categories-create-without-categories.input';
import { Type } from 'class-transformer';
import { product_categoriesCreateOrConnectWithoutCategoriesInput } from './product-categories-create-or-connect-without-categories.input';
import { product_categoriesUpsertWithWhereUniqueWithoutCategoriesInput } from './product-categories-upsert-with-where-unique-without-categories.input';
import { product_categoriesCreateManyCategoriesInputEnvelope } from './product-categories-create-many-categories-input-envelope.input';
import { Prisma } from '@prisma/client';
import { product_categoriesWhereUniqueInput } from './product-categories-where-unique.input';
import { product_categoriesUpdateWithWhereUniqueWithoutCategoriesInput } from './product-categories-update-with-where-unique-without-categories.input';
import { product_categoriesUpdateManyWithWhereWithoutCategoriesInput } from './product-categories-update-many-with-where-without-categories.input';
import { product_categoriesScalarWhereInput } from './product-categories-scalar-where.input';

@InputType()
export class product_categoriesUncheckedUpdateManyWithoutCategoriesNestedInput {

    @Field(() => [product_categoriesCreateWithoutCategoriesInput], {nullable:true})
    @Type(() => product_categoriesCreateWithoutCategoriesInput)
    create?: Array<product_categoriesCreateWithoutCategoriesInput>;

    @Field(() => [product_categoriesCreateOrConnectWithoutCategoriesInput], {nullable:true})
    @Type(() => product_categoriesCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: Array<product_categoriesCreateOrConnectWithoutCategoriesInput>;

    @Field(() => [product_categoriesUpsertWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    @Type(() => product_categoriesUpsertWithWhereUniqueWithoutCategoriesInput)
    upsert?: Array<product_categoriesUpsertWithWhereUniqueWithoutCategoriesInput>;

    @Field(() => product_categoriesCreateManyCategoriesInputEnvelope, {nullable:true})
    @Type(() => product_categoriesCreateManyCategoriesInputEnvelope)
    createMany?: product_categoriesCreateManyCategoriesInputEnvelope;

    @Field(() => [product_categoriesWhereUniqueInput], {nullable:true})
    @Type(() => product_categoriesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<product_categoriesWhereUniqueInput, 'product_id_category_id'>>;

    @Field(() => [product_categoriesWhereUniqueInput], {nullable:true})
    @Type(() => product_categoriesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<product_categoriesWhereUniqueInput, 'product_id_category_id'>>;

    @Field(() => [product_categoriesWhereUniqueInput], {nullable:true})
    @Type(() => product_categoriesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<product_categoriesWhereUniqueInput, 'product_id_category_id'>>;

    @Field(() => [product_categoriesWhereUniqueInput], {nullable:true})
    @Type(() => product_categoriesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<product_categoriesWhereUniqueInput, 'product_id_category_id'>>;

    @Field(() => [product_categoriesUpdateWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    @Type(() => product_categoriesUpdateWithWhereUniqueWithoutCategoriesInput)
    update?: Array<product_categoriesUpdateWithWhereUniqueWithoutCategoriesInput>;

    @Field(() => [product_categoriesUpdateManyWithWhereWithoutCategoriesInput], {nullable:true})
    @Type(() => product_categoriesUpdateManyWithWhereWithoutCategoriesInput)
    updateMany?: Array<product_categoriesUpdateManyWithWhereWithoutCategoriesInput>;

    @Field(() => [product_categoriesScalarWhereInput], {nullable:true})
    @Type(() => product_categoriesScalarWhereInput)
    deleteMany?: Array<product_categoriesScalarWhereInput>;
}
