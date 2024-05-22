import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { articlesCreateWithoutUsersInput } from './articles-create-without-users.input';
import { Type } from 'class-transformer';
import { articlesCreateOrConnectWithoutUsersInput } from './articles-create-or-connect-without-users.input';
import { articlesUpsertWithWhereUniqueWithoutUsersInput } from './articles-upsert-with-where-unique-without-users.input';
import { articlesCreateManyUsersInputEnvelope } from './articles-create-many-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { articlesWhereUniqueInput } from './articles-where-unique.input';
import { articlesUpdateWithWhereUniqueWithoutUsersInput } from './articles-update-with-where-unique-without-users.input';
import { articlesUpdateManyWithWhereWithoutUsersInput } from './articles-update-many-with-where-without-users.input';
import { articlesScalarWhereInput } from './articles-scalar-where.input';

@InputType()
export class articlesUncheckedUpdateManyWithoutUsersNestedInput {

    @Field(() => [articlesCreateWithoutUsersInput], {nullable:true})
    @Type(() => articlesCreateWithoutUsersInput)
    create?: Array<articlesCreateWithoutUsersInput>;

    @Field(() => [articlesCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => articlesCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<articlesCreateOrConnectWithoutUsersInput>;

    @Field(() => [articlesUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => articlesUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<articlesUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => articlesCreateManyUsersInputEnvelope, {nullable:true})
    @Type(() => articlesCreateManyUsersInputEnvelope)
    createMany?: articlesCreateManyUsersInputEnvelope;

    @Field(() => [articlesWhereUniqueInput], {nullable:true})
    @Type(() => articlesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<articlesWhereUniqueInput, 'id'>>;

    @Field(() => [articlesWhereUniqueInput], {nullable:true})
    @Type(() => articlesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<articlesWhereUniqueInput, 'id'>>;

    @Field(() => [articlesWhereUniqueInput], {nullable:true})
    @Type(() => articlesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<articlesWhereUniqueInput, 'id'>>;

    @Field(() => [articlesWhereUniqueInput], {nullable:true})
    @Type(() => articlesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<articlesWhereUniqueInput, 'id'>>;

    @Field(() => [articlesUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => articlesUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<articlesUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [articlesUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => articlesUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<articlesUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [articlesScalarWhereInput], {nullable:true})
    @Type(() => articlesScalarWhereInput)
    deleteMany?: Array<articlesScalarWhereInput>;
}
