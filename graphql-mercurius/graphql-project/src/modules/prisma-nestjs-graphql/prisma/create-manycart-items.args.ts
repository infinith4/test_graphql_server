import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { cart_itemsCreateManyInput } from '../cart-items/cart-items-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManycartItemsArgs {

    @Field(() => [cart_itemsCreateManyInput], {nullable:false})
    @Type(() => cart_itemsCreateManyInput)
    data!: Array<cart_itemsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
