import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutCartsInput } from '../users/users-create-nested-one-without-carts.input';
import { Type } from 'class-transformer';

@InputType()
export class cartsCreateWithoutCart_itemsInput {

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutCartsInput, {nullable:true})
    @Type(() => usersCreateNestedOneWithoutCartsInput)
    users?: usersCreateNestedOneWithoutCartsInput;
}
