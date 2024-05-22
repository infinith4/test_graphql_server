import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { merchant_imagesWhereUniqueInput } from './merchant-images-where-unique.input';
import { Type } from 'class-transformer';
import { merchant_imagesCreateWithoutMerchantsInput } from './merchant-images-create-without-merchants.input';

@InputType()
export class merchant_imagesCreateOrConnectWithoutMerchantsInput {

    @Field(() => merchant_imagesWhereUniqueInput, {nullable:false})
    @Type(() => merchant_imagesWhereUniqueInput)
    where!: Prisma.AtLeast<merchant_imagesWhereUniqueInput, 'id'>;

    @Field(() => merchant_imagesCreateWithoutMerchantsInput, {nullable:false})
    @Type(() => merchant_imagesCreateWithoutMerchantsInput)
    create!: merchant_imagesCreateWithoutMerchantsInput;
}
