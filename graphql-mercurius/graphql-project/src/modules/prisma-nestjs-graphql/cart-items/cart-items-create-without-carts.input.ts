import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { productsCreateNestedOneWithoutCart_itemsInput } from '../products/products-create-nested-one-without-cart-items.input';
import { Type } from 'class-transformer';

@InputType()
export class cart_itemsCreateWithoutCartsInput {

    @Field(() => Int, {nullable:true})
    quantity?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => productsCreateNestedOneWithoutCart_itemsInput, {nullable:true})
    @Type(() => productsCreateNestedOneWithoutCart_itemsInput)
    products?: productsCreateNestedOneWithoutCart_itemsInput;
}
