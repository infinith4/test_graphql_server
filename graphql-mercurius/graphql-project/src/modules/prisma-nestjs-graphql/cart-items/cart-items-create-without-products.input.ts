import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { cartsCreateNestedOneWithoutCart_itemsInput } from '../carts/carts-create-nested-one-without-cart-items.input';

@InputType()
export class cart_itemsCreateWithoutProductsInput {

    @Field(() => Int, {nullable:true})
    quantity?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => cartsCreateNestedOneWithoutCart_itemsInput, {nullable:true})
    carts?: cartsCreateNestedOneWithoutCart_itemsInput;
}
