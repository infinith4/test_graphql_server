import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsCreateWithoutMerchantsInput } from './products-create-without-merchants.input';
import { Type } from 'class-transformer';
import { productsCreateOrConnectWithoutMerchantsInput } from './products-create-or-connect-without-merchants.input';
import { productsUpsertWithWhereUniqueWithoutMerchantsInput } from './products-upsert-with-where-unique-without-merchants.input';
import { productsCreateManyMerchantsInputEnvelope } from './products-create-many-merchants-input-envelope.input';
import { Prisma } from '@prisma/client';
import { productsWhereUniqueInput } from './products-where-unique.input';
import { productsUpdateWithWhereUniqueWithoutMerchantsInput } from './products-update-with-where-unique-without-merchants.input';
import { productsUpdateManyWithWhereWithoutMerchantsInput } from './products-update-many-with-where-without-merchants.input';
import { productsScalarWhereInput } from './products-scalar-where.input';

@InputType()
export class productsUncheckedUpdateManyWithoutMerchantsNestedInput {

    @Field(() => [productsCreateWithoutMerchantsInput], {nullable:true})
    @Type(() => productsCreateWithoutMerchantsInput)
    create?: Array<productsCreateWithoutMerchantsInput>;

    @Field(() => [productsCreateOrConnectWithoutMerchantsInput], {nullable:true})
    @Type(() => productsCreateOrConnectWithoutMerchantsInput)
    connectOrCreate?: Array<productsCreateOrConnectWithoutMerchantsInput>;

    @Field(() => [productsUpsertWithWhereUniqueWithoutMerchantsInput], {nullable:true})
    @Type(() => productsUpsertWithWhereUniqueWithoutMerchantsInput)
    upsert?: Array<productsUpsertWithWhereUniqueWithoutMerchantsInput>;

    @Field(() => productsCreateManyMerchantsInputEnvelope, {nullable:true})
    @Type(() => productsCreateManyMerchantsInputEnvelope)
    createMany?: productsCreateManyMerchantsInputEnvelope;

    @Field(() => [productsWhereUniqueInput], {nullable:true})
    @Type(() => productsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<productsWhereUniqueInput, 'id'>>;

    @Field(() => [productsWhereUniqueInput], {nullable:true})
    @Type(() => productsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<productsWhereUniqueInput, 'id'>>;

    @Field(() => [productsWhereUniqueInput], {nullable:true})
    @Type(() => productsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<productsWhereUniqueInput, 'id'>>;

    @Field(() => [productsWhereUniqueInput], {nullable:true})
    @Type(() => productsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<productsWhereUniqueInput, 'id'>>;

    @Field(() => [productsUpdateWithWhereUniqueWithoutMerchantsInput], {nullable:true})
    @Type(() => productsUpdateWithWhereUniqueWithoutMerchantsInput)
    update?: Array<productsUpdateWithWhereUniqueWithoutMerchantsInput>;

    @Field(() => [productsUpdateManyWithWhereWithoutMerchantsInput], {nullable:true})
    @Type(() => productsUpdateManyWithWhereWithoutMerchantsInput)
    updateMany?: Array<productsUpdateManyWithWhereWithoutMerchantsInput>;

    @Field(() => [productsScalarWhereInput], {nullable:true})
    @Type(() => productsScalarWhereInput)
    deleteMany?: Array<productsScalarWhereInput>;
}
