import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { cart_itemsCreateInput } from '../cart-items/cart-items-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnecartItemsArgs {

    @Field(() => cart_itemsCreateInput, {nullable:true})
    @Type(() => cart_itemsCreateInput)
    data?: cart_itemsCreateInput;
}
