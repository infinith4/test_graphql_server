import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { product_categoriesCreateWithoutProductsInput } from './product-categories-create-without-products.input';
import { Type } from 'class-transformer';
import { product_categoriesCreateOrConnectWithoutProductsInput } from './product-categories-create-or-connect-without-products.input';
import { product_categoriesUpsertWithWhereUniqueWithoutProductsInput } from './product-categories-upsert-with-where-unique-without-products.input';
import { product_categoriesCreateManyProductsInputEnvelope } from './product-categories-create-many-products-input-envelope.input';
import { Prisma } from '@prisma/client';
import { product_categoriesWhereUniqueInput } from './product-categories-where-unique.input';
import { product_categoriesUpdateWithWhereUniqueWithoutProductsInput } from './product-categories-update-with-where-unique-without-products.input';
import { product_categoriesUpdateManyWithWhereWithoutProductsInput } from './product-categories-update-many-with-where-without-products.input';
import { product_categoriesScalarWhereInput } from './product-categories-scalar-where.input';

@InputType()
export class product_categoriesUncheckedUpdateManyWithoutProductsNestedInput {

    @Field(() => [product_categoriesCreateWithoutProductsInput], {nullable:true})
    @Type(() => product_categoriesCreateWithoutProductsInput)
    create?: Array<product_categoriesCreateWithoutProductsInput>;

    @Field(() => [product_categoriesCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => product_categoriesCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<product_categoriesCreateOrConnectWithoutProductsInput>;

    @Field(() => [product_categoriesUpsertWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => product_categoriesUpsertWithWhereUniqueWithoutProductsInput)
    upsert?: Array<product_categoriesUpsertWithWhereUniqueWithoutProductsInput>;

    @Field(() => product_categoriesCreateManyProductsInputEnvelope, {nullable:true})
    @Type(() => product_categoriesCreateManyProductsInputEnvelope)
    createMany?: product_categoriesCreateManyProductsInputEnvelope;

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

    @Field(() => [product_categoriesUpdateWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => product_categoriesUpdateWithWhereUniqueWithoutProductsInput)
    update?: Array<product_categoriesUpdateWithWhereUniqueWithoutProductsInput>;

    @Field(() => [product_categoriesUpdateManyWithWhereWithoutProductsInput], {nullable:true})
    @Type(() => product_categoriesUpdateManyWithWhereWithoutProductsInput)
    updateMany?: Array<product_categoriesUpdateManyWithWhereWithoutProductsInput>;

    @Field(() => [product_categoriesScalarWhereInput], {nullable:true})
    @Type(() => product_categoriesScalarWhereInput)
    deleteMany?: Array<product_categoriesScalarWhereInput>;
}
