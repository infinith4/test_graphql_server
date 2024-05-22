import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { articlesUncheckedCreateNestedManyWithoutUsersInput } from '../articles/articles-unchecked-create-nested-many-without-users.input';
import { merchantsUncheckedCreateNestedManyWithoutUsersInput } from '../merchants/merchants-unchecked-create-nested-many-without-users.input';

@InputType()
export class usersUncheckedCreateWithoutCountriesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    first_name?: string;

    @Field(() => String, {nullable:true})
    last_name?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:true})
    phone_number?: string;

    @Field(() => String, {nullable:true})
    gender?: string;

    @Field(() => Date, {nullable:true})
    date_of_birth?: Date | string;

    @Field(() => String, {nullable:true})
    avatar_url?: string;

    @Field(() => Date, {nullable:true})
    last_login?: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => articlesUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    articles?: articlesUncheckedCreateNestedManyWithoutUsersInput;

    @Field(() => merchantsUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    merchants?: merchantsUncheckedCreateNestedManyWithoutUsersInput;
}
