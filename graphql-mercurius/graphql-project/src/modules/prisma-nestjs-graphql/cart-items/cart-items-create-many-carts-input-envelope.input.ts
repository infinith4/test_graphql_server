import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cart_itemsCreateManyCartsInput } from './cart-items-create-many-carts.input';
import { Type } from 'class-transformer';

@InputType()
export class cart_itemsCreateManyCartsInputEnvelope {

    @Field(() => [cart_itemsCreateManyCartsInput], {nullable:false})
    @Type(() => cart_itemsCreateManyCartsInput)
    data!: Array<cart_itemsCreateManyCartsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
