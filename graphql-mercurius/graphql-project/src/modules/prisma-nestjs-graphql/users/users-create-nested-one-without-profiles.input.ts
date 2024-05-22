import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutProfilesInput } from './users-create-without-profiles.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutProfilesInput } from './users-create-or-connect-without-profiles.input';
import { Prisma } from '@prisma/client';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutProfilesInput {

    @Field(() => usersCreateWithoutProfilesInput, {nullable:true})
    @Type(() => usersCreateWithoutProfilesInput)
    create?: usersCreateWithoutProfilesInput;

    @Field(() => usersCreateOrConnectWithoutProfilesInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutProfilesInput)
    connectOrCreate?: usersCreateOrConnectWithoutProfilesInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: Prisma.AtLeast<usersWhereUniqueInput, 'id' | 'username' | 'email'>;
}
