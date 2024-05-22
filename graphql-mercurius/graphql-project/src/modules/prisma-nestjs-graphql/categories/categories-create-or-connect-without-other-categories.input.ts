import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { categoriesWhereUniqueInput } from './categories-where-unique.input';
import { Type } from 'class-transformer';
import { categoriesCreateWithoutOther_categoriesInput } from './categories-create-without-other-categories.input';

@InputType()
export class categoriesCreateOrConnectWithoutOther_categoriesInput {

    @Field(() => categoriesWhereUniqueInput, {nullable:false})
    @Type(() => categoriesWhereUniqueInput)
    where!: Prisma.AtLeast<categoriesWhereUniqueInput, 'id'>;

    @Field(() => categoriesCreateWithoutOther_categoriesInput, {nullable:false})
    @Type(() => categoriesCreateWithoutOther_categoriesInput)
    create!: categoriesCreateWithoutOther_categoriesInput;
}
