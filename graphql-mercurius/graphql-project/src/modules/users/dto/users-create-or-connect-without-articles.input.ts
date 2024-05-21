import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutArticlesInput } from './users-create-without-articles.input';

@InputType()
export class usersCreateOrConnectWithoutArticlesInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: Prisma.AtLeast<usersWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => usersCreateWithoutArticlesInput, {nullable:false})
    @Type(() => usersCreateWithoutArticlesInput)
    create!: usersCreateWithoutArticlesInput;
}
