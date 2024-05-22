import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsUpdateWithoutOrder_itemsInput } from './products-update-without-order-items.input';
import { Type } from 'class-transformer';
import { productsCreateWithoutOrder_itemsInput } from './products-create-without-order-items.input';
import { productsWhereInput } from './products-where.input';

@InputType()
export class productsUpsertWithoutOrder_itemsInput {

    @Field(() => productsUpdateWithoutOrder_itemsInput, {nullable:false})
    @Type(() => productsUpdateWithoutOrder_itemsInput)
    update!: productsUpdateWithoutOrder_itemsInput;

    @Field(() => productsCreateWithoutOrder_itemsInput, {nullable:false})
    @Type(() => productsCreateWithoutOrder_itemsInput)
    create!: productsCreateWithoutOrder_itemsInput;

    @Field(() => productsWhereInput, {nullable:true})
    @Type(() => productsWhereInput)
    where?: productsWhereInput;
}
