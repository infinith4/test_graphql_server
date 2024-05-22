import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { articlesWhereUniqueInput } from './articles-where-unique.input';
import { Type } from 'class-transformer';
import { articlesUpdateWithoutUsersInput } from './articles-update-without-users.input';
import { articlesCreateWithoutUsersInput } from './articles-create-without-users.input';

@InputType()
export class articlesUpsertWithWhereUniqueWithoutUsersInput {

    @Field(() => articlesWhereUniqueInput, {nullable:false})
    @Type(() => articlesWhereUniqueInput)
    where!: Prisma.AtLeast<articlesWhereUniqueInput, 'id'>;

    @Field(() => articlesUpdateWithoutUsersInput, {nullable:false})
    @Type(() => articlesUpdateWithoutUsersInput)
    update!: articlesUpdateWithoutUsersInput;

    @Field(() => articlesCreateWithoutUsersInput, {nullable:false})
    @Type(() => articlesCreateWithoutUsersInput)
    create!: articlesCreateWithoutUsersInput;
}
