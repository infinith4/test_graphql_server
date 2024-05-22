import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cartsUpdateWithoutCart_itemsInput } from './carts-update-without-cart-items.input';
import { Type } from 'class-transformer';
import { cartsCreateWithoutCart_itemsInput } from './carts-create-without-cart-items.input';
import { cartsWhereInput } from './carts-where.input';

@InputType()
export class cartsUpsertWithoutCart_itemsInput {

    @Field(() => cartsUpdateWithoutCart_itemsInput, {nullable:false})
    @Type(() => cartsUpdateWithoutCart_itemsInput)
    update!: cartsUpdateWithoutCart_itemsInput;

    @Field(() => cartsCreateWithoutCart_itemsInput, {nullable:false})
    @Type(() => cartsCreateWithoutCart_itemsInput)
    create!: cartsCreateWithoutCart_itemsInput;

    @Field(() => cartsWhereInput, {nullable:true})
    @Type(() => cartsWhereInput)
    where?: cartsWhereInput;
}
