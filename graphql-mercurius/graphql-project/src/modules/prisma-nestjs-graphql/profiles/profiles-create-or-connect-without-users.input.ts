import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { profilesWhereUniqueInput } from './profiles-where-unique.input';
import { Type } from 'class-transformer';
import { profilesCreateWithoutUsersInput } from './profiles-create-without-users.input';

@InputType()
export class profilesCreateOrConnectWithoutUsersInput {

    @Field(() => profilesWhereUniqueInput, {nullable:false})
    @Type(() => profilesWhereUniqueInput)
    where!: Prisma.AtLeast<profilesWhereUniqueInput, 'id' | 'user_id'>;

    @Field(() => profilesCreateWithoutUsersInput, {nullable:false})
    @Type(() => profilesCreateWithoutUsersInput)
    create!: profilesCreateWithoutUsersInput;
}
