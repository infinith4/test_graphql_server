import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesCreateWithoutOther_categoriesInput } from './categories-create-without-other-categories.input';
import { Type } from 'class-transformer';
import { categoriesCreateOrConnectWithoutOther_categoriesInput } from './categories-create-or-connect-without-other-categories.input';
import { Prisma } from '@prisma/client';
import { categoriesWhereUniqueInput } from './categories-where-unique.input';

@InputType()
export class categoriesCreateNestedOneWithoutOther_categoriesInput {

    @Field(() => categoriesCreateWithoutOther_categoriesInput, {nullable:true})
    @Type(() => categoriesCreateWithoutOther_categoriesInput)
    create?: categoriesCreateWithoutOther_categoriesInput;

    @Field(() => categoriesCreateOrConnectWithoutOther_categoriesInput, {nullable:true})
    @Type(() => categoriesCreateOrConnectWithoutOther_categoriesInput)
    connectOrCreate?: categoriesCreateOrConnectWithoutOther_categoriesInput;

    @Field(() => categoriesWhereUniqueInput, {nullable:true})
    @Type(() => categoriesWhereUniqueInput)
    connect?: Prisma.AtLeast<categoriesWhereUniqueInput, 'id'>;
}
