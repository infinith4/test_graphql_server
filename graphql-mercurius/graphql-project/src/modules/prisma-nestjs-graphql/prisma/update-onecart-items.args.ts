import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { cart_itemsUpdateInput } from '../cart-items/cart-items-update.input';
import { Type } from 'class-transformer';
import { cart_itemsWhereUniqueInput } from '../cart-items/cart-items-where-unique.input';

@ArgsType()
export class UpdateOnecartItemsArgs {

    @Field(() => cart_itemsUpdateInput, {nullable:false})
    @Type(() => cart_itemsUpdateInput)
    data!: cart_itemsUpdateInput;

    @Field(() => cart_itemsWhereUniqueInput, {nullable:false})
    @Type(() => cart_itemsWhereUniqueInput)
    where!: cart_itemsWhereUniqueInput;
}
