import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { merchant_imagesUncheckedCreateNestedManyWithoutMerchantsInput } from '../merchant-images/merchant-images-unchecked-create-nested-many-without-merchants.input';
import { productsUncheckedCreateNestedManyWithoutMerchantsInput } from '../products/products-unchecked-create-nested-many-without-merchants.input';

@InputType()
export class merchantsUncheckedCreateWithoutCountriesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Int, {nullable:false})
    admin_id!: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => merchant_imagesUncheckedCreateNestedManyWithoutMerchantsInput, {nullable:true})
    merchant_images?: merchant_imagesUncheckedCreateNestedManyWithoutMerchantsInput;

    @Field(() => productsUncheckedCreateNestedManyWithoutMerchantsInput, {nullable:true})
    products?: productsUncheckedCreateNestedManyWithoutMerchantsInput;
}
