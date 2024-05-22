import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsUpdateWithoutCart_itemsInput } from './products-update-without-cart-items.input';
import { Type } from 'class-transformer';
import { productsCreateWithoutCart_itemsInput } from './products-create-without-cart-items.input';
import { productsWhereInput } from './products-where.input';

@InputType()
export class productsUpsertWithoutCart_itemsInput {

    @Field(() => productsUpdateWithoutCart_itemsInput, {nullable:false})
    @Type(() => productsUpdateWithoutCart_itemsInput)
    update!: productsUpdateWithoutCart_itemsInput;

    @Field(() => productsCreateWithoutCart_itemsInput, {nullable:false})
    @Type(() => productsCreateWithoutCart_itemsInput)
    create!: productsCreateWithoutCart_itemsInput;

    @Field(() => productsWhereInput, {nullable:true})
    @Type(() => productsWhereInput)
    where?: productsWhereInput;
}
