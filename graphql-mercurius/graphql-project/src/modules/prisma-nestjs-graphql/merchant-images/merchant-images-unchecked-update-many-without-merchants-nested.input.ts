import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { merchant_imagesCreateWithoutMerchantsInput } from './merchant-images-create-without-merchants.input';
import { Type } from 'class-transformer';
import { merchant_imagesCreateOrConnectWithoutMerchantsInput } from './merchant-images-create-or-connect-without-merchants.input';
import { merchant_imagesUpsertWithWhereUniqueWithoutMerchantsInput } from './merchant-images-upsert-with-where-unique-without-merchants.input';
import { merchant_imagesCreateManyMerchantsInputEnvelope } from './merchant-images-create-many-merchants-input-envelope.input';
import { Prisma } from '@prisma/client';
import { merchant_imagesWhereUniqueInput } from './merchant-images-where-unique.input';
import { merchant_imagesUpdateWithWhereUniqueWithoutMerchantsInput } from './merchant-images-update-with-where-unique-without-merchants.input';
import { merchant_imagesUpdateManyWithWhereWithoutMerchantsInput } from './merchant-images-update-many-with-where-without-merchants.input';
import { merchant_imagesScalarWhereInput } from './merchant-images-scalar-where.input';

@InputType()
export class merchant_imagesUncheckedUpdateManyWithoutMerchantsNestedInput {

    @Field(() => [merchant_imagesCreateWithoutMerchantsInput], {nullable:true})
    @Type(() => merchant_imagesCreateWithoutMerchantsInput)
    create?: Array<merchant_imagesCreateWithoutMerchantsInput>;

    @Field(() => [merchant_imagesCreateOrConnectWithoutMerchantsInput], {nullable:true})
    @Type(() => merchant_imagesCreateOrConnectWithoutMerchantsInput)
    connectOrCreate?: Array<merchant_imagesCreateOrConnectWithoutMerchantsInput>;

    @Field(() => [merchant_imagesUpsertWithWhereUniqueWithoutMerchantsInput], {nullable:true})
    @Type(() => merchant_imagesUpsertWithWhereUniqueWithoutMerchantsInput)
    upsert?: Array<merchant_imagesUpsertWithWhereUniqueWithoutMerchantsInput>;

    @Field(() => merchant_imagesCreateManyMerchantsInputEnvelope, {nullable:true})
    @Type(() => merchant_imagesCreateManyMerchantsInputEnvelope)
    createMany?: merchant_imagesCreateManyMerchantsInputEnvelope;

    @Field(() => [merchant_imagesWhereUniqueInput], {nullable:true})
    @Type(() => merchant_imagesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<merchant_imagesWhereUniqueInput, 'id'>>;

    @Field(() => [merchant_imagesWhereUniqueInput], {nullable:true})
    @Type(() => merchant_imagesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<merchant_imagesWhereUniqueInput, 'id'>>;

    @Field(() => [merchant_imagesWhereUniqueInput], {nullable:true})
    @Type(() => merchant_imagesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<merchant_imagesWhereUniqueInput, 'id'>>;

    @Field(() => [merchant_imagesWhereUniqueInput], {nullable:true})
    @Type(() => merchant_imagesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<merchant_imagesWhereUniqueInput, 'id'>>;

    @Field(() => [merchant_imagesUpdateWithWhereUniqueWithoutMerchantsInput], {nullable:true})
    @Type(() => merchant_imagesUpdateWithWhereUniqueWithoutMerchantsInput)
    update?: Array<merchant_imagesUpdateWithWhereUniqueWithoutMerchantsInput>;

    @Field(() => [merchant_imagesUpdateManyWithWhereWithoutMerchantsInput], {nullable:true})
    @Type(() => merchant_imagesUpdateManyWithWhereWithoutMerchantsInput)
    updateMany?: Array<merchant_imagesUpdateManyWithWhereWithoutMerchantsInput>;

    @Field(() => [merchant_imagesScalarWhereInput], {nullable:true})
    @Type(() => merchant_imagesScalarWhereInput)
    deleteMany?: Array<merchant_imagesScalarWhereInput>;
}
