import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { cart_itemsWhereUniqueInput } from '../cart-items/cart-items-where-unique.input';
import { Type } from 'class-transformer';
import { cart_itemsCreateInput } from '../cart-items/cart-items-create.input';
import { cart_itemsUpdateInput } from '../cart-items/cart-items-update.input';

@ArgsType()
export class UpsertOnecartItemsArgs {

    @Field(() => cart_itemsWhereUniqueInput, {nullable:false})
    @Type(() => cart_itemsWhereUniqueInput)
    where!: cart_itemsWhereUniqueInput;

    @Field(() => cart_itemsCreateInput, {nullable:false})
    @Type(() => cart_itemsCreateInput)
    create!: cart_itemsCreateInput;

    @Field(() => cart_itemsUpdateInput, {nullable:false})
    @Type(() => cart_itemsUpdateInput)
    update!: cart_itemsUpdateInput;
}
