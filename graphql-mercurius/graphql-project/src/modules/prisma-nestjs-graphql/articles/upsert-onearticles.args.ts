import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { articlesWhereUniqueInput } from './articles-where-unique.input';
import { Type } from 'class-transformer';
import { articlesCreateInput } from './articles-create.input';
import { articlesUpdateInput } from './articles-update.input';

@ArgsType()
export class UpsertOnearticlesArgs {

    @Field(() => articlesWhereUniqueInput, {nullable:false})
    @Type(() => articlesWhereUniqueInput)
    where!: Prisma.AtLeast<articlesWhereUniqueInput, 'id'>;

    @Field(() => articlesCreateInput, {nullable:false})
    @Type(() => articlesCreateInput)
    create!: articlesCreateInput;

    @Field(() => articlesUpdateInput, {nullable:false})
    @Type(() => articlesUpdateInput)
    update!: articlesUpdateInput;
}
