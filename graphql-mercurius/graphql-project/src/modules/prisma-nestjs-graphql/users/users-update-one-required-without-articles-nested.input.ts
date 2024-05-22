import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutArticlesInput } from './users-create-without-articles.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutArticlesInput } from './users-create-or-connect-without-articles.input';
import { usersUpsertWithoutArticlesInput } from './users-upsert-without-articles.input';
import { Prisma } from '@prisma/client';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateToOneWithWhereWithoutArticlesInput } from './users-update-to-one-with-where-without-articles.input';

@InputType()
export class usersUpdateOneRequiredWithoutArticlesNestedInput {

    @Field(() => usersCreateWithoutArticlesInput, {nullable:true})
    @Type(() => usersCreateWithoutArticlesInput)
    create?: usersCreateWithoutArticlesInput;

    @Field(() => usersCreateOrConnectWithoutArticlesInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutArticlesInput)
    connectOrCreate?: usersCreateOrConnectWithoutArticlesInput;

    @Field(() => usersUpsertWithoutArticlesInput, {nullable:true})
    @Type(() => usersUpsertWithoutArticlesInput)
    upsert?: usersUpsertWithoutArticlesInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: Prisma.AtLeast<usersWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => usersUpdateToOneWithWhereWithoutArticlesInput, {nullable:true})
    @Type(() => usersUpdateToOneWithWhereWithoutArticlesInput)
    update?: usersUpdateToOneWithWhereWithoutArticlesInput;
}
