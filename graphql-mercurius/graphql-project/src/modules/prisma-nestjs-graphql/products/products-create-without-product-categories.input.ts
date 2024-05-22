import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { products_status } from '../prisma/products-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';
import { cart_itemsCreateNestedManyWithoutProductsInput } from '../cart-items/cart-items-create-nested-many-without-products.input';
import { order_itemsCreateNestedManyWithoutProductsInput } from '../order-items/order-items-create-nested-many-without-products.input';

@InputType()
export class productsCreateWithoutProduct_categoriesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => products_status, {nullable:true})
    status?: keyof typeof products_status;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;

    @Field(() => Int, {nullable:true})
    stock?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => cart_itemsCreateNestedManyWithoutProductsInput, {nullable:true})
    @Type(() => cart_itemsCreateNestedManyWithoutProductsInput)
    cart_items?: cart_itemsCreateNestedManyWithoutProductsInput;

    @Field(() => order_itemsCreateNestedManyWithoutProductsInput, {nullable:true})
    @Type(() => order_itemsCreateNestedManyWithoutProductsInput)
    order_items?: order_itemsCreateNestedManyWithoutProductsInput;
}
