import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsCreateWithoutCategoriesInput } from './products-create-without-categories.input';
import { Type } from 'class-transformer';
import { productsCreateOrConnectWithoutCategoriesInput } from './products-create-or-connect-without-categories.input';
import { productsUpsertWithWhereUniqueWithoutCategoriesInput } from './products-upsert-with-where-unique-without-categories.input';
import { productsCreateManyCategoriesInputEnvelope } from './products-create-many-categories-input-envelope.input';
import { Prisma } from '@prisma/client';
import { productsWhereUniqueInput } from './products-where-unique.input';
import { productsUpdateWithWhereUniqueWithoutCategoriesInput } from './products-update-with-where-unique-without-categories.input';
import { productsUpdateManyWithWhereWithoutCategoriesInput } from './products-update-many-with-where-without-categories.input';
import { productsScalarWhereInput } from './products-scalar-where.input';

@InputType()
export class productsUncheckedUpdateManyWithoutCategoriesNestedInput {

    @Field(() => [productsCreateWithoutCategoriesInput], {nullable:true})
    @Type(() => productsCreateWithoutCategoriesInput)
    create?: Array<productsCreateWithoutCategoriesInput>;

    @Field(() => [productsCreateOrConnectWithoutCategoriesInput], {nullable:true})
    @Type(() => productsCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: Array<productsCreateOrConnectWithoutCategoriesInput>;

    @Field(() => [productsUpsertWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    @Type(() => productsUpsertWithWhereUniqueWithoutCategoriesInput)
    upsert?: Array<productsUpsertWithWhereUniqueWithoutCategoriesInput>;

    @Field(() => productsCreateManyCategoriesInputEnvelope, {nullable:true})
    @Type(() => productsCreateManyCategoriesInputEnvelope)
    createMany?: productsCreateManyCategoriesInputEnvelope;

    @Field(() => [productsWhereUniqueInput], {nullable:true})
    @Type(() => productsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<productsWhereUniqueInput, 'id'>>;

    @Field(() => [productsWhereUniqueInput], {nullable:true})
    @Type(() => productsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<productsWhereUniqueInput, 'id'>>;

    @Field(() => [productsWhereUniqueInput], {nullable:true})
    @Type(() => productsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<productsWhereUniqueInput, 'id'>>;

    @Field(() => [productsWhereUniqueInput], {nullable:true})
    @Type(() => productsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<productsWhereUniqueInput, 'id'>>;

    @Field(() => [productsUpdateWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    @Type(() => productsUpdateWithWhereUniqueWithoutCategoriesInput)
    update?: Array<productsUpdateWithWhereUniqueWithoutCategoriesInput>;

    @Field(() => [productsUpdateManyWithWhereWithoutCategoriesInput], {nullable:true})
    @Type(() => productsUpdateManyWithWhereWithoutCategoriesInput)
    updateMany?: Array<productsUpdateManyWithWhereWithoutCategoriesInput>;

    @Field(() => [productsScalarWhereInput], {nullable:true})
    @Type(() => productsScalarWhereInput)
    deleteMany?: Array<productsScalarWhereInput>;
}
