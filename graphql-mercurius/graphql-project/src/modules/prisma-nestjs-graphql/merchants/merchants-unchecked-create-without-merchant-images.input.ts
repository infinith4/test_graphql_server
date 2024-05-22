import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { productsUncheckedCreateNestedManyWithoutMerchantsInput } from '../products/products-unchecked-create-nested-many-without-merchants.input';

@InputType()
export class merchantsUncheckedCreateWithoutMerchant_imagesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Int, {nullable:false})
    admin_id!: number;

    @Field(() => Int, {nullable:true})
    country_code?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => productsUncheckedCreateNestedManyWithoutMerchantsInput, {nullable:true})
    products?: productsUncheckedCreateNestedManyWithoutMerchantsInput;
}
