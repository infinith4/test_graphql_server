import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { merchant_imagesWhereInput } from '../merchant-images/merchant-images-where.input';

@InputType()
export class Merchant_imagesListRelationFilter {

    @Field(() => merchant_imagesWhereInput, {nullable:true})
    every?: merchant_imagesWhereInput;

    @Field(() => merchant_imagesWhereInput, {nullable:true})
    some?: merchant_imagesWhereInput;

    @Field(() => merchant_imagesWhereInput, {nullable:true})
    none?: merchant_imagesWhereInput;
}
