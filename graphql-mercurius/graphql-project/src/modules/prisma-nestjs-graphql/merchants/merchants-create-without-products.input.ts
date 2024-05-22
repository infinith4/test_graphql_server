import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { merchant_imagesCreateNestedManyWithoutMerchantsInput } from '../merchant-images/merchant-images-create-nested-many-without-merchants.input';
import { usersCreateNestedOneWithoutMerchantsInput } from '../users/users-create-nested-one-without-merchants.input';
import { countriesCreateNestedOneWithoutMerchantsInput } from '../countries/countries-create-nested-one-without-merchants.input';

@InputType()
export class merchantsCreateWithoutProductsInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => merchant_imagesCreateNestedManyWithoutMerchantsInput, {nullable:true})
    merchant_images?: merchant_imagesCreateNestedManyWithoutMerchantsInput;

    @Field(() => usersCreateNestedOneWithoutMerchantsInput, {nullable:false})
    users!: usersCreateNestedOneWithoutMerchantsInput;

    @Field(() => countriesCreateNestedOneWithoutMerchantsInput, {nullable:true})
    countries?: countriesCreateNestedOneWithoutMerchantsInput;
}