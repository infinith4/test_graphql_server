import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { countriesCreateWithoutMerchantsInput } from './countries-create-without-merchants.input';
import { Type } from 'class-transformer';
import { countriesCreateOrConnectWithoutMerchantsInput } from './countries-create-or-connect-without-merchants.input';
import { countriesUpsertWithoutMerchantsInput } from './countries-upsert-without-merchants.input';
import { countriesWhereInput } from './countries-where.input';
import { Prisma } from '@prisma/client';
import { countriesWhereUniqueInput } from './countries-where-unique.input';
import { countriesUpdateToOneWithWhereWithoutMerchantsInput } from './countries-update-to-one-with-where-without-merchants.input';

@InputType()
export class countriesUpdateOneWithoutMerchantsNestedInput {

    @Field(() => countriesCreateWithoutMerchantsInput, {nullable:true})
    @Type(() => countriesCreateWithoutMerchantsInput)
    create?: countriesCreateWithoutMerchantsInput;

    @Field(() => countriesCreateOrConnectWithoutMerchantsInput, {nullable:true})
    @Type(() => countriesCreateOrConnectWithoutMerchantsInput)
    connectOrCreate?: countriesCreateOrConnectWithoutMerchantsInput;

    @Field(() => countriesUpsertWithoutMerchantsInput, {nullable:true})
    @Type(() => countriesUpsertWithoutMerchantsInput)
    upsert?: countriesUpsertWithoutMerchantsInput;

    @Field(() => countriesWhereInput, {nullable:true})
    @Type(() => countriesWhereInput)
    disconnect?: countriesWhereInput;

    @Field(() => countriesWhereInput, {nullable:true})
    @Type(() => countriesWhereInput)
    delete?: countriesWhereInput;

    @Field(() => countriesWhereUniqueInput, {nullable:true})
    @Type(() => countriesWhereUniqueInput)
    connect?: Prisma.AtLeast<countriesWhereUniqueInput, 'code'>;

    @Field(() => countriesUpdateToOneWithWhereWithoutMerchantsInput, {nullable:true})
    @Type(() => countriesUpdateToOneWithWhereWithoutMerchantsInput)
    update?: countriesUpdateToOneWithWhereWithoutMerchantsInput;
}
