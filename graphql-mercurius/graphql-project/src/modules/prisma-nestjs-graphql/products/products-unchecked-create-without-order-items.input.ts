import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { products_status } from '../prisma/products-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { cart_itemsUncheckedCreateNestedManyWithoutProductsInput } from '../cart-items/cart-items-unchecked-create-nested-many-without-products.input';
import { product_categoriesUncheckedCreateNestedManyWithoutProductsInput } from '../product-categories/product-categories-unchecked-create-nested-many-without-products.input';

@InputType()
export class productsUncheckedCreateWithoutOrder_itemsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => cart_itemsUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    @Type(() => cart_itemsUncheckedCreateNestedManyWithoutProductsInput)
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutProductsInput;

    @Field(() => product_categoriesUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    @Type(() => product_categoriesUncheckedCreateNestedManyWithoutProductsInput)
    product_categories?: product_categoriesUncheckedCreateNestedManyWithoutProductsInput;
}
