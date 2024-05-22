import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutProfilesInput } from './users-create-without-profiles.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutProfilesInput } from './users-create-or-connect-without-profiles.input';
import { usersUpsertWithoutProfilesInput } from './users-upsert-without-profiles.input';
import { usersWhereInput } from './users-where.input';
import { Prisma } from '@prisma/client';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateToOneWithWhereWithoutProfilesInput } from './users-update-to-one-with-where-without-profiles.input';

@InputType()
export class usersUpdateOneWithoutProfilesNestedInput {

    @Field(() => usersCreateWithoutProfilesInput, {nullable:true})
    @Type(() => usersCreateWithoutProfilesInput)
    create?: usersCreateWithoutProfilesInput;

    @Field(() => usersCreateOrConnectWithoutProfilesInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutProfilesInput)
    connectOrCreate?: usersCreateOrConnectWithoutProfilesInput;

    @Field(() => usersUpsertWithoutProfilesInput, {nullable:true})
    @Type(() => usersUpsertWithoutProfilesInput)
    upsert?: usersUpsertWithoutProfilesInput;

    @Field(() => usersWhereInput, {nullable:true})
    @Type(() => usersWhereInput)
    disconnect?: usersWhereInput;

    @Field(() => usersWhereInput, {nullable:true})
    @Type(() => usersWhereInput)
    delete?: usersWhereInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: Prisma.AtLeast<usersWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => usersUpdateToOneWithWhereWithoutProfilesInput, {nullable:true})
    @Type(() => usersUpdateToOneWithWhereWithoutProfilesInput)
    update?: usersUpdateToOneWithWhereWithoutProfilesInput;
}
