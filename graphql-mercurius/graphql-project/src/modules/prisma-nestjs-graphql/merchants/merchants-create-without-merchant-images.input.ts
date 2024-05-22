import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutMerchantsInput } from '../users/users-create-nested-one-without-merchants.input';
import { countriesCreateNestedOneWithoutMerchantsInput } from '../countries/countries-create-nested-one-without-merchants.input';
import { productsCreateNestedManyWithoutMerchantsInput } from '../products/products-create-nested-many-without-merchants.input';

@InputType()
export class merchantsCreateWithoutMerchant_imagesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutMerchantsInput, {nullable:false})
    users!: usersCreateNestedOneWithoutMerchantsInput;

    @Field(() => countriesCreateNestedOneWithoutMerchantsInput, {nullable:true})
    countries?: countriesCreateNestedOneWithoutMerchantsInput;

    @Field(() => productsCreateNestedManyWithoutMerchantsInput, {nullable:true})
    products?: productsCreateNestedManyWithoutMerchantsInput;
}
