import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { categoriesWhereUniqueInput } from './categories-where-unique.input';
import { Type } from 'class-transformer';
import { categoriesCreateInput } from './categories-create.input';
import { categoriesUpdateInput } from './categories-update.input';

@ArgsType()
export class UpsertOnecategoriesArgs {

    @Field(() => categoriesWhereUniqueInput, {nullable:false})
    @Type(() => categoriesWhereUniqueInput)
    where!: Prisma.AtLeast<categoriesWhereUniqueInput, 'id' | 'name'>;

    @Field(() => categoriesCreateInput, {nullable:false})
    @Type(() => categoriesCreateInput)
    create!: categoriesCreateInput;

    @Field(() => categoriesUpdateInput, {nullable:false})
    @Type(() => categoriesUpdateInput)
    update!: categoriesUpdateInput;
}
