import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { products_status } from '../prisma/products-status.enum';
import { merchantsCreateNestedOneWithoutProductsInput } from '../merchants/merchants-create-nested-one-without-products.input';

@InputType()
export class productsCreateWithoutCategoriesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Int, {nullable:true})
    price?: number;

    @Field(() => products_status, {nullable:true})
    status?: keyof typeof products_status;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => merchantsCreateNestedOneWithoutProductsInput, {nullable:false})
    merchants!: merchantsCreateNestedOneWithoutProductsInput;
}
