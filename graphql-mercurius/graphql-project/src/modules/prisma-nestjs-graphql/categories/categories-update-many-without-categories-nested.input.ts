import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesCreateWithoutCategoriesInput } from './categories-create-without-categories.input';
import { Type } from 'class-transformer';
import { categoriesCreateOrConnectWithoutCategoriesInput } from './categories-create-or-connect-without-categories.input';
import { categoriesUpsertWithWhereUniqueWithoutCategoriesInput } from './categories-upsert-with-where-unique-without-categories.input';
import { categoriesCreateManyCategoriesInputEnvelope } from './categories-create-many-categories-input-envelope.input';
import { Prisma } from '@prisma/client';
import { categoriesWhereUniqueInput } from './categories-where-unique.input';
import { categoriesUpdateWithWhereUniqueWithoutCategoriesInput } from './categories-update-with-where-unique-without-categories.input';
import { categoriesUpdateManyWithWhereWithoutCategoriesInput } from './categories-update-many-with-where-without-categories.input';
import { categoriesScalarWhereInput } from './categories-scalar-where.input';

@InputType()
export class categoriesUpdateManyWithoutCategoriesNestedInput {

    @Field(() => [categoriesCreateWithoutCategoriesInput], {nullable:true})
    @Type(() => categoriesCreateWithoutCategoriesInput)
    create?: Array<categoriesCreateWithoutCategoriesInput>;

    @Field(() => [categoriesCreateOrConnectWithoutCategoriesInput], {nullable:true})
    @Type(() => categoriesCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: Array<categoriesCreateOrConnectWithoutCategoriesInput>;

    @Field(() => [categoriesUpsertWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    @Type(() => categoriesUpsertWithWhereUniqueWithoutCategoriesInput)
    upsert?: Array<categoriesUpsertWithWhereUniqueWithoutCategoriesInput>;

    @Field(() => categoriesCreateManyCategoriesInputEnvelope, {nullable:true})
    @Type(() => categoriesCreateManyCategoriesInputEnvelope)
    createMany?: categoriesCreateManyCategoriesInputEnvelope;

    @Field(() => [categoriesWhereUniqueInput], {nullable:true})
    @Type(() => categoriesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<categoriesWhereUniqueInput, 'id'>>;

    @Field(() => [categoriesWhereUniqueInput], {nullable:true})
    @Type(() => categoriesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<categoriesWhereUniqueInput, 'id'>>;

    @Field(() => [categoriesWhereUniqueInput], {nullable:true})
    @Type(() => categoriesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<categoriesWhereUniqueInput, 'id'>>;

    @Field(() => [categoriesWhereUniqueInput], {nullable:true})
    @Type(() => categoriesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<categoriesWhereUniqueInput, 'id'>>;

    @Field(() => [categoriesUpdateWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    @Type(() => categoriesUpdateWithWhereUniqueWithoutCategoriesInput)
    update?: Array<categoriesUpdateWithWhereUniqueWithoutCategoriesInput>;

    @Field(() => [categoriesUpdateManyWithWhereWithoutCategoriesInput], {nullable:true})
    @Type(() => categoriesUpdateManyWithWhereWithoutCategoriesInput)
    updateMany?: Array<categoriesUpdateManyWithWhereWithoutCategoriesInput>;

    @Field(() => [categoriesScalarWhereInput], {nullable:true})
    @Type(() => categoriesScalarWhereInput)
    deleteMany?: Array<categoriesScalarWhereInput>;
}
