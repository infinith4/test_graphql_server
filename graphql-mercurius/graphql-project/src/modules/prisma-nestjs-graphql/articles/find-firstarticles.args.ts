import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { articlesWhereInput } from './articles-where.input';
import { Type } from 'class-transformer';
import { articlesOrderByWithRelationInput } from './articles-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { articlesWhereUniqueInput } from './articles-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ArticlesScalarFieldEnum } from '../prisma/articles-scalar-field.enum';

@ArgsType()
export class FindFirstarticlesArgs {

    @Field(() => articlesWhereInput, {nullable:true})
    @Type(() => articlesWhereInput)
    where?: articlesWhereInput;

    @Field(() => [articlesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<articlesOrderByWithRelationInput>;

    @Field(() => articlesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<articlesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ArticlesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ArticlesScalarFieldEnum>;
}
