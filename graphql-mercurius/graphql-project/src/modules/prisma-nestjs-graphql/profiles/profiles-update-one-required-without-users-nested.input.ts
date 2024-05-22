import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { profilesCreateWithoutUsersInput } from './profiles-create-without-users.input';
import { Type } from 'class-transformer';
import { profilesCreateOrConnectWithoutUsersInput } from './profiles-create-or-connect-without-users.input';
import { profilesUpsertWithoutUsersInput } from './profiles-upsert-without-users.input';
import { Prisma } from '@prisma/client';
import { profilesWhereUniqueInput } from './profiles-where-unique.input';
import { profilesUpdateToOneWithWhereWithoutUsersInput } from './profiles-update-to-one-with-where-without-users.input';

@InputType()
export class profilesUpdateOneRequiredWithoutUsersNestedInput {

    @Field(() => profilesCreateWithoutUsersInput, {nullable:true})
    @Type(() => profilesCreateWithoutUsersInput)
    create?: profilesCreateWithoutUsersInput;

    @Field(() => profilesCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => profilesCreateOrConnectWithoutUsersInput)
    connectOrCreate?: profilesCreateOrConnectWithoutUsersInput;

    @Field(() => profilesUpsertWithoutUsersInput, {nullable:true})
    @Type(() => profilesUpsertWithoutUsersInput)
    upsert?: profilesUpsertWithoutUsersInput;

    @Field(() => profilesWhereUniqueInput, {nullable:true})
    @Type(() => profilesWhereUniqueInput)
    connect?: Prisma.AtLeast<profilesWhereUniqueInput, 'id' | 'user_id'>;

    @Field(() => profilesUpdateToOneWithWhereWithoutUsersInput, {nullable:true})
    @Type(() => profilesUpdateToOneWithWhereWithoutUsersInput)
    update?: profilesUpdateToOneWithWhereWithoutUsersInput;
}
