import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { profilesCreateWithoutUsersInput } from './profiles-create-without-users.input';
import { Type } from 'class-transformer';
import { profilesCreateOrConnectWithoutUsersInput } from './profiles-create-or-connect-without-users.input';
import { Prisma } from '@prisma/client';
import { profilesWhereUniqueInput } from './profiles-where-unique.input';

@InputType()
export class profilesCreateNestedOneWithoutUsersInput {

    @Field(() => profilesCreateWithoutUsersInput, {nullable:true})
    @Type(() => profilesCreateWithoutUsersInput)
    create?: profilesCreateWithoutUsersInput;

    @Field(() => profilesCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => profilesCreateOrConnectWithoutUsersInput)
    connectOrCreate?: profilesCreateOrConnectWithoutUsersInput;

    @Field(() => profilesWhereUniqueInput, {nullable:true})
    @Type(() => profilesWhereUniqueInput)
    connect?: Prisma.AtLeast<profilesWhereUniqueInput, 'id' | 'user_id'>;
}
