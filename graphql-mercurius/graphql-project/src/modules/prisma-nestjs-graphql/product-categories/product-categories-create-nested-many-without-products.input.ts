import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { product_categoriesCreateWithoutProductsInput } from './product-categories-create-without-products.input';
import { Type } from 'class-transformer';
import { product_categoriesCreateOrConnectWithoutProductsInput } from './product-categories-create-or-connect-without-products.input';
import { product_categoriesCreateManyProductsInputEnvelope } from './product-categories-create-many-products-input-envelope.input';
import { Prisma } from '@prisma/client';
import { product_categoriesWhereUniqueInput } from './product-categories-where-unique.input';

@InputType()
export class product_categoriesCreateNestedManyWithoutProductsInput {

    @Field(() => [product_categoriesCreateWithoutProductsInput], {nullable:true})
    @Type(() => product_categoriesCreateWithoutProductsInput)
    create?: Array<product_categoriesCreateWithoutProductsInput>;

    @Field(() => [product_categoriesCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => product_categoriesCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<product_categoriesCreateOrConnectWithoutProductsInput>;

    @Field(() => product_categoriesCreateManyProductsInputEnvelope, {nullable:true})
    @Type(() => product_categoriesCreateManyProductsInputEnvelope)
    createMany?: product_categoriesCreateManyProductsInputEnvelope;

    @Field(() => [product_categoriesWhereUniqueInput], {nullable:true})
    @Type(() => product_categoriesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<product_categoriesWhereUniqueInput, 'product_id_category_id'>>;
}
