import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { orders } from '../../orders_module/entities/order.entity';
import { Product } from '../../products_module/entities/product.entity';

@ObjectType()
export class OrderItem {

    @Field(() => Int, {nullable:false})
    order_id!: number;

    @Field(() => Int, {nullable:false})
    product_id!: number;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    price!: Decimal;

    @Field(() => Date, {nullable:true})
    created_at!: Date | null;

    @Field(() => Date, {nullable:true})
    updated_at!: Date | null;

    @Field(() => orders, {nullable:false})
    orders?: orders;

    @Field(() => Product, {nullable:false})
    products?: Product;
}
