import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cart_itemsCreateNestedManyWithoutCartsInput } from '../cart-items/cart-items-create-nested-many-without-carts.input';
import { Type } from 'class-transformer';

@InputType()
export class cartsCreateWithoutUsersInput {

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => cart_itemsCreateNestedManyWithoutCartsInput, {nullable:true})
    @Type(() => cart_itemsCreateNestedManyWithoutCartsInput)
    cart_items?: cart_itemsCreateNestedManyWithoutCartsInput;
}
