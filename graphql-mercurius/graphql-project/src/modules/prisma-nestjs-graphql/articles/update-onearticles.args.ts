import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { articlesUpdateInput } from './articles-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { articlesWhereUniqueInput } from './articles-where-unique.input';

@ArgsType()
export class UpdateOnearticlesArgs {

    @Field(() => articlesUpdateInput, {nullable:false})
    @Type(() => articlesUpdateInput)
    data!: articlesUpdateInput;

    @Field(() => articlesWhereUniqueInput, {nullable:false})
    @Type(() => articlesWhereUniqueInput)
    where!: Prisma.AtLeast<articlesWhereUniqueInput, 'id'>;
}
