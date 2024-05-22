import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MerchantsCount {

    @Field(() => Int, {nullable:false})
    merchant_images!: number;

    @Field(() => Int, {nullable:false})
    products!: number;
}
