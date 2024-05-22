import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { articlesUncheckedCreateNestedManyWithoutUsersInput } from '../articles/articles-unchecked-create-nested-many-without-users.input';
import { cartsUncheckedCreateNestedManyWithoutUsersInput } from '../carts/carts-unchecked-create-nested-many-without-users.input';
import { customersUncheckedCreateNestedOneWithoutUsersInput } from '../customers/customers-unchecked-create-nested-one-without-users.input';
import { ordersUncheckedCreateNestedManyWithoutUsersInput } from '../orders/orders-unchecked-create-nested-many-without-users.input';
import { Type } from 'class-transformer';

@InputType()
export class usersUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => articlesUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    articles?: articlesUncheckedCreateNestedManyWithoutUsersInput;

    @Field(() => cartsUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    carts?: cartsUncheckedCreateNestedManyWithoutUsersInput;

    @Field(() => customersUncheckedCreateNestedOneWithoutUsersInput, {nullable:true})
    customers?: customersUncheckedCreateNestedOneWithoutUsersInput;

    @Field(() => ordersUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    @Type(() => ordersUncheckedCreateNestedManyWithoutUsersInput)
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput;
}
