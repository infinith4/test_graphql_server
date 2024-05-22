import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cart_itemsWhereInput } from '../cart-items/cart-items-where.input';

@InputType()
export class Cart_itemsListRelationFilter {

    @Field(() => cart_itemsWhereInput, {nullable:true})
    every?: cart_itemsWhereInput;

    @Field(() => cart_itemsWhereInput, {nullable:true})
    some?: cart_itemsWhereInput;

    @Field(() => cart_itemsWhereInput, {nullable:true})
    none?: cart_itemsWhereInput;
}
