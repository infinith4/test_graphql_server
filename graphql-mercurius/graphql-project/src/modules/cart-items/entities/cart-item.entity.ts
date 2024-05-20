import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { carts } from '../../carts/entities/cart.entity';
import { Product } from '../../products/entities/product.entity';

@ObjectType()
export class cart_items {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    cart_id!: number | null;

    @Field(() => Int, {nullable:true})
    product_id!: number | null;

    @Field(() => Int, {nullable:false,defaultValue:1})
    quantity!: number;

    @Field(() => Date, {nullable:true})
    created_at!: Date | null;

    @Field(() => Date, {nullable:true})
    updated_at!: Date | null;

    @Field(() => carts, {nullable:true})
    carts?: carts | null;

    @Field(() => Product, {nullable:true})
    products?: Product | null;
}
