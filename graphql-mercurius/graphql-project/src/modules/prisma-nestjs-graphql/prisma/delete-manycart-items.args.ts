import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { cart_itemsWhereInput } from '../cart-items/cart-items-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManycartItemsArgs {

    @Field(() => cart_itemsWhereInput, {nullable:true})
    @Type(() => cart_itemsWhereInput)
    where?: cart_itemsWhereInput;
}
