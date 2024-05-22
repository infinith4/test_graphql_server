import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cartsWhereInput } from './carts-where.input';
import { Type } from 'class-transformer';
import { cartsUpdateWithoutCart_itemsInput } from './carts-update-without-cart-items.input';

@InputType()
export class cartsUpdateToOneWithWhereWithoutCart_itemsInput {

    @Field(() => cartsWhereInput, {nullable:true})
    @Type(() => cartsWhereInput)
    where?: cartsWhereInput;

    @Field(() => cartsUpdateWithoutCart_itemsInput, {nullable:false})
    @Type(() => cartsUpdateWithoutCart_itemsInput)
    data!: cartsUpdateWithoutCart_itemsInput;
}
