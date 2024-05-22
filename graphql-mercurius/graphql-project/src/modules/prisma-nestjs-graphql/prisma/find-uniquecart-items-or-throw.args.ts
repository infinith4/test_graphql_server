import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { cart_itemsWhereUniqueInput } from '../cart-items/cart-items-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquecartItemsOrThrowArgs {

    @Field(() => cart_itemsWhereUniqueInput, {nullable:false})
    @Type(() => cart_itemsWhereUniqueInput)
    where!: cart_itemsWhereUniqueInput;
}
