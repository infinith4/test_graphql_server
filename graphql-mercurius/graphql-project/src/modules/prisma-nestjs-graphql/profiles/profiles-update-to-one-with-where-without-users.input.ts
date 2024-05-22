import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { profilesWhereInput } from './profiles-where.input';
import { Type } from 'class-transformer';
import { profilesUpdateWithoutUsersInput } from './profiles-update-without-users.input';

@InputType()
export class profilesUpdateToOneWithWhereWithoutUsersInput {

    @Field(() => profilesWhereInput, {nullable:true})
    @Type(() => profilesWhereInput)
    where?: profilesWhereInput;

    @Field(() => profilesUpdateWithoutUsersInput, {nullable:false})
    @Type(() => profilesUpdateWithoutUsersInput)
    data!: profilesUpdateWithoutUsersInput;
}
