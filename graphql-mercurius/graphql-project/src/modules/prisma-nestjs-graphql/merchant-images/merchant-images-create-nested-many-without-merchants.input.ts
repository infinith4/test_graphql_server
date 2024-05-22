import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { merchant_imagesCreateWithoutMerchantsInput } from './merchant-images-create-without-merchants.input';
import { Type } from 'class-transformer';
import { merchant_imagesCreateOrConnectWithoutMerchantsInput } from './merchant-images-create-or-connect-without-merchants.input';
import { merchant_imagesCreateManyMerchantsInputEnvelope } from './merchant-images-create-many-merchants-input-envelope.input';
import { Prisma } from '@prisma/client';
import { merchant_imagesWhereUniqueInput } from './merchant-images-where-unique.input';

@InputType()
export class merchant_imagesCreateNestedManyWithoutMerchantsInput {

    @Field(() => [merchant_imagesCreateWithoutMerchantsInput], {nullable:true})
    @Type(() => merchant_imagesCreateWithoutMerchantsInput)
    create?: Array<merchant_imagesCreateWithoutMerchantsInput>;

    @Field(() => [merchant_imagesCreateOrConnectWithoutMerchantsInput], {nullable:true})
    @Type(() => merchant_imagesCreateOrConnectWithoutMerchantsInput)
    connectOrCreate?: Array<merchant_imagesCreateOrConnectWithoutMerchantsInput>;

    @Field(() => merchant_imagesCreateManyMerchantsInputEnvelope, {nullable:true})
    @Type(() => merchant_imagesCreateManyMerchantsInputEnvelope)
    createMany?: merchant_imagesCreateManyMerchantsInputEnvelope;

    @Field(() => [merchant_imagesWhereUniqueInput], {nullable:true})
    @Type(() => merchant_imagesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<merchant_imagesWhereUniqueInput, 'id'>>;
}
