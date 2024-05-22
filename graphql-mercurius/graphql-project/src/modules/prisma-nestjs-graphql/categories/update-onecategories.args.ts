import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categoriesUpdateInput } from './categories-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { categoriesWhereUniqueInput } from './categories-where-unique.input';

@ArgsType()
export class UpdateOnecategoriesArgs {

    @Field(() => categoriesUpdateInput, {nullable:false})
    @Type(() => categoriesUpdateInput)
    data!: categoriesUpdateInput;

    @Field(() => categoriesWhereUniqueInput, {nullable:false})
    @Type(() => categoriesWhereUniqueInput)
    where!: Prisma.AtLeast<categoriesWhereUniqueInput, 'id' | 'name'>;
}
