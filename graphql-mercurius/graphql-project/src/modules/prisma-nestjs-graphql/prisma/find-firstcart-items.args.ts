import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { cart_itemsWhereInput } from '../cart-items/cart-items-where.input';
import { Type } from 'class-transformer';
import { cart_itemsOrderByWithRelationInput } from '../cart-items/cart-items-order-by-with-relation.input';
import { cart_itemsWhereUniqueInput } from '../cart-items/cart-items-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Cart_itemsScalarFieldEnum } from './cart-items-scalar-field.enum';

@ArgsType()
export class FindFirstcartItemsArgs {

    @Field(() => cart_itemsWhereInput, {nullable:true})
    @Type(() => cart_itemsWhereInput)
    where?: cart_itemsWhereInput;

    @Field(() => [cart_itemsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<cart_itemsOrderByWithRelationInput>;

    @Field(() => cart_itemsWhereUniqueInput, {nullable:true})
    cursor?: cart_itemsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Cart_itemsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Cart_itemsScalarFieldEnum>;
}
