import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ProductStatus } from '../../products/entities/products-status.enum';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Int } from '@nestjs/graphql';
import { cart_items } from '../../cart-items/entities/cart-item.entity';
import { OrderItem } from '../../order-items/entities/order-item.entity';
import { ProductCategory } from '../../product-categories/entities/product-category.entity';
import { ProductCount } from '../../products/entities/products-count.output';

@ObjectType()
export class Product {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => ProductStatus, {nullable:true})
    status!: keyof typeof ProductStatus | null;

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

    @Field(() => [OrderItem], {nullable:true})
    order_items?: Array<OrderItem>;

    @Field(() => [ProductCategory], {nullable:true})
    product_categories?: Array<ProductCategory>;

    @Field(() => ProductCount, {nullable:false})
    _count?: ProductCount;
}
