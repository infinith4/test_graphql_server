import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { articlesCreateNestedManyWithoutUsersInput } from '../articles/articles-create-nested-many-without-users.input';
import { customersCreateNestedOneWithoutUsersInput } from '../customers/customers-create-nested-one-without-users.input';
import { profilesCreateNestedOneWithoutUsersInput } from '../profiles/profiles-create-nested-one-without-users.input';
import { countriesCreateNestedOneWithoutUsersInput } from '../countries/countries-create-nested-one-without-users.input';

@InputType()
export class usersCreateWithoutMerchantsInput {

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

    @Field(() => articlesCreateNestedManyWithoutUsersInput, {nullable:true})
    articles?: articlesCreateNestedManyWithoutUsersInput;

    @Field(() => customersCreateNestedOneWithoutUsersInput, {nullable:false})
    customers!: customersCreateNestedOneWithoutUsersInput;

    @Field(() => profilesCreateNestedOneWithoutUsersInput, {nullable:false})
    profiles!: profilesCreateNestedOneWithoutUsersInput;

    @Field(() => countriesCreateNestedOneWithoutUsersInput, {nullable:true})
    countries?: countriesCreateNestedOneWithoutUsersInput;
}
