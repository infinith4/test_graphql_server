import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutProfilesInput } from '../users/users-create-nested-one-without-profiles.input';

@InputType()
export class profilesCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    user_id?: number;

    @Field(() => String, {nullable:true})
    bio?: string;

    @Field(() => String, {nullable:true})
    website?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutProfilesInput, {nullable:true})
    users?: usersCreateNestedOneWithoutProfilesInput;
}
