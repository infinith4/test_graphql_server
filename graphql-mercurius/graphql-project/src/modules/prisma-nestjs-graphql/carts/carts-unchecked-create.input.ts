import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { cart_itemsUncheckedCreateNestedManyWithoutCartsInput } from '../cart-items/cart-items-unchecked-create-nested-many-without-carts.input';
import { Type } from 'class-transformer';

@InputType()
export class cartsUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    user_id?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => cart_itemsUncheckedCreateNestedManyWithoutCartsInput, {nullable:true})
    @Type(() => cart_itemsUncheckedCreateNestedManyWithoutCartsInput)
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutCartsInput;
}
