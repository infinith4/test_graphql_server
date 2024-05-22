import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereInput } from './users-where.input';
import { Type } from 'class-transformer';
import { usersUpdateWithoutProfilesInput } from './users-update-without-profiles.input';

@InputType()
export class usersUpdateToOneWithWhereWithoutProfilesInput {

    @Field(() => usersWhereInput, {nullable:true})
    @Type(() => usersWhereInput)
    where?: usersWhereInput;

    @Field(() => usersUpdateWithoutProfilesInput, {nullable:false})
    @Type(() => usersUpdateWithoutProfilesInput)
    data!: usersUpdateWithoutProfilesInput;
}
