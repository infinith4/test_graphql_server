import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { articlesCreateWithoutUsersInput } from './articles-create-without-users.input';
import { Type } from 'class-transformer';
import { articlesCreateOrConnectWithoutUsersInput } from './articles-create-or-connect-without-users.input';
import { articlesCreateManyUsersInputEnvelope } from './articles-create-many-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { articlesWhereUniqueInput } from './articles-where-unique.input';

@InputType()
export class articlesCreateNestedManyWithoutUsersInput {

    @Field(() => [articlesCreateWithoutUsersInput], {nullable:true})
    @Type(() => articlesCreateWithoutUsersInput)
    create?: Array<articlesCreateWithoutUsersInput>;

    @Field(() => [articlesCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => articlesCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<articlesCreateOrConnectWithoutUsersInput>;

    @Field(() => articlesCreateManyUsersInputEnvelope, {nullable:true})
    @Type(() => articlesCreateManyUsersInputEnvelope)
    createMany?: articlesCreateManyUsersInputEnvelope;

    @Field(() => [articlesWhereUniqueInput], {nullable:true})
    @Type(() => articlesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<articlesWhereUniqueInput, 'id'>>;
}
