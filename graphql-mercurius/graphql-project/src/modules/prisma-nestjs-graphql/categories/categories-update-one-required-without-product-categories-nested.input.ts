import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesCreateWithoutProduct_categoriesInput } from './categories-create-without-product-categories.input';
import { Type } from 'class-transformer';
import { categoriesCreateOrConnectWithoutProduct_categoriesInput } from './categories-create-or-connect-without-product-categories.input';
import { categoriesUpsertWithoutProduct_categoriesInput } from './categories-upsert-without-product-categories.input';
import { Prisma } from '@prisma/client';
import { categoriesWhereUniqueInput } from './categories-where-unique.input';
import { categoriesUpdateToOneWithWhereWithoutProduct_categoriesInput } from './categories-update-to-one-with-where-without-product-categories.input';

@InputType()
export class categoriesUpdateOneRequiredWithoutProduct_categoriesNestedInput {

    @Field(() => categoriesCreateWithoutProduct_categoriesInput, {nullable:true})
    @Type(() => categoriesCreateWithoutProduct_categoriesInput)
    create?: categoriesCreateWithoutProduct_categoriesInput;

    @Field(() => categoriesCreateOrConnectWithoutProduct_categoriesInput, {nullable:true})
    @Type(() => categoriesCreateOrConnectWithoutProduct_categoriesInput)
    connectOrCreate?: categoriesCreateOrConnectWithoutProduct_categoriesInput;

    @Field(() => categoriesUpsertWithoutProduct_categoriesInput, {nullable:true})
    @Type(() => categoriesUpsertWithoutProduct_categoriesInput)
    upsert?: categoriesUpsertWithoutProduct_categoriesInput;

    @Field(() => categoriesWhereUniqueInput, {nullable:true})
    @Type(() => categoriesWhereUniqueInput)
    connect?: Prisma.AtLeast<categoriesWhereUniqueInput, 'id' | 'name'>;

    @Field(() => categoriesUpdateToOneWithWhereWithoutProduct_categoriesInput, {nullable:true})
    @Type(() => categoriesUpdateToOneWithWhereWithoutProduct_categoriesInput)
    update?: categoriesUpdateToOneWithWhereWithoutProduct_categoriesInput;
}
