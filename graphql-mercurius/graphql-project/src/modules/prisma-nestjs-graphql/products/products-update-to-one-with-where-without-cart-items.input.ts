import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsWhereInput } from './products-where.input';
import { Type } from 'class-transformer';
import { productsUpdateWithoutCart_itemsInput } from './products-update-without-cart-items.input';

@InputType()
export class productsUpdateToOneWithWhereWithoutCart_itemsInput {

    @Field(() => productsWhereInput, {nullable:true})
    @Type(() => productsWhereInput)
    where?: productsWhereInput;

    @Field(() => productsUpdateWithoutCart_itemsInput, {nullable:false})
    @Type(() => productsUpdateWithoutCart_itemsInput)
    data!: productsUpdateWithoutCart_itemsInput;
}
