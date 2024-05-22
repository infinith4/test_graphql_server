import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { products_status } from '../prisma/products-status.enum';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Int } from '@nestjs/graphql';
import { cart_items } from '../cart-items/cart-items.model';
import { order_items } from '../order-items/order-items.model';
import { product_categories } from '../product-categories/product-categories.model';
import { ProductsCount } from '../prisma/products-count.output';

@ObjectType()
export class products {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => products_status, {nullable:true})
    status!: keyof typeof products_status | null;

    @Field(() => GraphQLDecimal, {nullable:false})
    price!: Decimal;

    @Field(() => Int, {nullable:false,defaultValue:0})
    stock!: number;

    @Field(() => Date, {nullable:true})
    created_at!: Date | null;

    @Field(() => Date, {nullable:true})
    updated_at!: Date | null;

    @Field(() => [cart_items], {nullable:true})
    cart_items?: Array<cart_items>;

    @Field(() => [order_items], {nullable:true})
    order_items?: Array<order_items>;

    @Field(() => [product_categories], {nullable:true})
    product_categories?: Array<product_categories>;

    @Field(() => ProductsCount, {nullable:false})
    _count?: ProductsCount;
}
