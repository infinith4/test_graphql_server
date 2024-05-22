import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesCreateWithoutOther_categoriesInput } from './categories-create-without-other-categories.input';
import { Type } from 'class-transformer';
import { categoriesCreateOrConnectWithoutOther_categoriesInput } from './categories-create-or-connect-without-other-categories.input';
import { categoriesUpsertWithoutOther_categoriesInput } from './categories-upsert-without-other-categories.input';
import { categoriesWhereInput } from './categories-where.input';
import { Prisma } from '@prisma/client';
import { categoriesWhereUniqueInput } from './categories-where-unique.input';
import { categoriesUpdateToOneWithWhereWithoutOther_categoriesInput } from './categories-update-to-one-with-where-without-other-categories.input';

@InputType()
export class categoriesUpdateOneWithoutOther_categoriesNestedInput {

    @Field(() => categoriesCreateWithoutOther_categoriesInput, {nullable:true})
    @Type(() => categoriesCreateWithoutOther_categoriesInput)
    create?: categoriesCreateWithoutOther_categoriesInput;

    @Field(() => categoriesCreateOrConnectWithoutOther_categoriesInput, {nullable:true})
    @Type(() => categoriesCreateOrConnectWithoutOther_categoriesInput)
    connectOrCreate?: categoriesCreateOrConnectWithoutOther_categoriesInput;

    @Field(() => categoriesUpsertWithoutOther_categoriesInput, {nullable:true})
    @Type(() => categoriesUpsertWithoutOther_categoriesInput)
    upsert?: categoriesUpsertWithoutOther_categoriesInput;

    @Field(() => categoriesWhereInput, {nullable:true})
    @Type(() => categoriesWhereInput)
    disconnect?: categoriesWhereInput;

    @Field(() => categoriesWhereInput, {nullable:true})
    @Type(() => categoriesWhereInput)
    delete?: categoriesWhereInput;

    @Field(() => categoriesWhereUniqueInput, {nullable:true})
    @Type(() => categoriesWhereUniqueInput)
    connect?: Prisma.AtLeast<categoriesWhereUniqueInput, 'id'>;

    @Field(() => categoriesUpdateToOneWithWhereWithoutOther_categoriesInput, {nullable:true})
    @Type(() => categoriesUpdateToOneWithWhereWithoutOther_categoriesInput)
    update?: categoriesUpdateToOneWithWhereWithoutOther_categoriesInput;
}
