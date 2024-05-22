import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { merchant_imagesWhereUniqueInput } from './merchant-images-where-unique.input';
import { Type } from 'class-transformer';
import { merchant_imagesUpdateWithoutMerchantsInput } from './merchant-images-update-without-merchants.input';
import { merchant_imagesCreateWithoutMerchantsInput } from './merchant-images-create-without-merchants.input';

@InputType()
export class merchant_imagesUpsertWithWhereUniqueWithoutMerchantsInput {

    @Field(() => merchant_imagesWhereUniqueInput, {nullable:false})
    @Type(() => merchant_imagesWhereUniqueInput)
    where!: Prisma.AtLeast<merchant_imagesWhereUniqueInput, 'id'>;

    @Field(() => merchant_imagesUpdateWithoutMerchantsInput, {nullable:false})
    @Type(() => merchant_imagesUpdateWithoutMerchantsInput)
    update!: merchant_imagesUpdateWithoutMerchantsInput;

    @Field(() => merchant_imagesCreateWithoutMerchantsInput, {nullable:false})
    @Type(() => merchant_imagesCreateWithoutMerchantsInput)
    create!: merchant_imagesCreateWithoutMerchantsInput;
}
