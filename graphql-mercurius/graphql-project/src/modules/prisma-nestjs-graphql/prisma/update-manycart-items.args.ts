import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { cart_itemsUpdateManyMutationInput } from '../cart-items/cart-items-update-many-mutation.input';
import { Type } from 'class-transformer';
import { cart_itemsWhereInput } from '../cart-items/cart-items-where.input';

@ArgsType()
export class UpdateManycartItemsArgs {

    @Field(() => cart_itemsUpdateManyMutationInput, {nullable:false})
    @Type(() => cart_itemsUpdateManyMutationInput)
    data!: cart_itemsUpdateManyMutationInput;

    @Field(() => cart_itemsWhereInput, {nullable:true})
    @Type(() => cart_itemsWhereInput)
    where?: cart_itemsWhereInput;
}
