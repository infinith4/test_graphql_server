import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsWhereInput } from './products-where.input';
import { Type } from 'class-transformer';
import { productsUpdateWithoutOrder_itemsInput } from './products-update-without-order-items.input';

@InputType()
export class productsUpdateToOneWithWhereWithoutOrder_itemsInput {

    @Field(() => productsWhereInput, {nullable:true})
    @Type(() => productsWhereInput)
    where?: productsWhereInput;

    @Field(() => productsUpdateWithoutOrder_itemsInput, {nullable:false})
    @Type(() => productsUpdateWithoutOrder_itemsInput)
    data!: productsUpdateWithoutOrder_itemsInput;
}
