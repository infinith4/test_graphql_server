import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { profilesUpdateWithoutUsersInput } from './profiles-update-without-users.input';
import { Type } from 'class-transformer';
import { profilesCreateWithoutUsersInput } from './profiles-create-without-users.input';
import { profilesWhereInput } from './profiles-where.input';

@InputType()
export class profilesUpsertWithoutUsersInput {

    @Field(() => profilesUpdateWithoutUsersInput, {nullable:false})
    @Type(() => profilesUpdateWithoutUsersInput)
    update!: profilesUpdateWithoutUsersInput;

    @Field(() => profilesCreateWithoutUsersInput, {nullable:false})
    @Type(() => profilesCreateWithoutUsersInput)
    create!: profilesCreateWithoutUsersInput;

    @Field(() => profilesWhereInput, {nullable:true})
    @Type(() => profilesWhereInput)
    where?: profilesWhereInput;
}
