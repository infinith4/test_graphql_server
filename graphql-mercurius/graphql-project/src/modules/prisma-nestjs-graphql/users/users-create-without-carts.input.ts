import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { articlesCreateNestedManyWithoutUsersInput } from '../articles/articles-create-nested-many-without-users.input';
import { customersCreateNestedOneWithoutUsersInput } from '../customers/customers-create-nested-one-without-users.input';
import { ordersCreateNestedManyWithoutUsersInput } from '../orders/orders-create-nested-many-without-users.input';
import { Type } from 'class-transformer';

@InputType()
export class usersCreateWithoutCartsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    hashed_password!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => articlesCreateNestedManyWithoutUsersInput, {nullable:true})
    articles?: articlesCreateNestedManyWithoutUsersInput;

    @Field(() => customersCreateNestedOneWithoutUsersInput, {nullable:true})
    customers?: customersCreateNestedOneWithoutUsersInput;

    @Field(() => ordersCreateNestedManyWithoutUsersInput, {nullable:true})
    @Type(() => ordersCreateNestedManyWithoutUsersInput)
    orders?: ordersCreateNestedManyWithoutUsersInput;
}
