import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class order_itemsOrder_idProduct_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    order_id!: number;

    @Field(() => Int, {nullable:false})
    product_id!: number;
}
