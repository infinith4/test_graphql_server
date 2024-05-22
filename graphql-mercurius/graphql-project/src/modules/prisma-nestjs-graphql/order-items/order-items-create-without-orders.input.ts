import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { productsCreateNestedOneWithoutOrder_itemsInput } from '../products/products-create-nested-one-without-order-items.input';

@InputType()
export class order_itemsCreateWithoutOrdersInput {

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => productsCreateNestedOneWithoutOrder_itemsInput, {nullable:false})
    @Type(() => productsCreateNestedOneWithoutOrder_itemsInput)
    products!: productsCreateNestedOneWithoutOrder_itemsInput;
}
