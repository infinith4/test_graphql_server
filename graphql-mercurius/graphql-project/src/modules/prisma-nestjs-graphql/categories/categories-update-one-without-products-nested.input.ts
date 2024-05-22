import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesCreateWithoutProductsInput } from './categories-create-without-products.input';
import { Type } from 'class-transformer';
import { categoriesCreateOrConnectWithoutProductsInput } from './categories-create-or-connect-without-products.input';
import { categoriesUpsertWithoutProductsInput } from './categories-upsert-without-products.input';
import { categoriesWhereInput } from './categories-where.input';
import { Prisma } from '@prisma/client';
import { categoriesWhereUniqueInput } from './categories-where-unique.input';
import { categoriesUpdateToOneWithWhereWithoutProductsInput } from './categories-update-to-one-with-where-without-products.input';

@InputType()
export class categoriesUpdateOneWithoutProductsNestedInput {

    @Field(() => categoriesCreateWithoutProductsInput, {nullable:true})
    @Type(() => categoriesCreateWithoutProductsInput)
    create?: categoriesCreateWithoutProductsInput;

    @Field(() => categoriesCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => categoriesCreateOrConnectWithoutProductsInput)
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput;

    @Field(() => categoriesUpsertWithoutProductsInput, {nullable:true})
    @Type(() => categoriesUpsertWithoutProductsInput)
    upsert?: categoriesUpsertWithoutProductsInput;

    @Field(() => categoriesWhereInput, {nullable:true})
    @Type(() => categoriesWhereInput)
    disconnect?: categoriesWhereInput;

    @Field(() => categoriesWhereInput, {nullable:true})
    @Type(() => categoriesWhereInput)
    delete?: categoriesWhereInput;

    @Field(() => categoriesWhereUniqueInput, {nullable:true})
    @Type(() => categoriesWhereUniqueInput)
    connect?: Prisma.AtLeast<categoriesWhereUniqueInput, 'id'>;

    @Field(() => categoriesUpdateToOneWithWhereWithoutProductsInput, {nullable:true})
    @Type(() => categoriesUpdateToOneWithWhereWithoutProductsInput)
    update?: categoriesUpdateToOneWithWhereWithoutProductsInput;
}
