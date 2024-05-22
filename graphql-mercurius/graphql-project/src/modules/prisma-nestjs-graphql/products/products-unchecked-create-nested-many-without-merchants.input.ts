import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsCreateWithoutMerchantsInput } from './products-create-without-merchants.input';
import { Type } from 'class-transformer';
import { productsCreateOrConnectWithoutMerchantsInput } from './products-create-or-connect-without-merchants.input';
import { productsCreateManyMerchantsInputEnvelope } from './products-create-many-merchants-input-envelope.input';
import { Prisma } from '@prisma/client';
import { productsWhereUniqueInput } from './products-where-unique.input';

@InputType()
export class productsUncheckedCreateNestedManyWithoutMerchantsInput {

    @Field(() => [productsCreateWithoutMerchantsInput], {nullable:true})
    @Type(() => productsCreateWithoutMerchantsInput)
    create?: Array<productsCreateWithoutMerchantsInput>;

    @Field(() => [productsCreateOrConnectWithoutMerchantsInput], {nullable:true})
    @Type(() => productsCreateOrConnectWithoutMerchantsInput)
    connectOrCreate?: Array<productsCreateOrConnectWithoutMerchantsInput>;

    @Field(() => productsCreateManyMerchantsInputEnvelope, {nullable:true})
    @Type(() => productsCreateManyMerchantsInputEnvelope)
    createMany?: productsCreateManyMerchantsInputEnvelope;

    @Field(() => [productsWhereUniqueInput], {nullable:true})
    @Type(() => productsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<productsWhereUniqueInput, 'id'>>;
}
