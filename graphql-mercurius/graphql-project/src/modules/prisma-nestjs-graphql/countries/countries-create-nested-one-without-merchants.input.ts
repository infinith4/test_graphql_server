import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { countriesCreateWithoutMerchantsInput } from './countries-create-without-merchants.input';
import { Type } from 'class-transformer';
import { countriesCreateOrConnectWithoutMerchantsInput } from './countries-create-or-connect-without-merchants.input';
import { Prisma } from '@prisma/client';
import { countriesWhereUniqueInput } from './countries-where-unique.input';

@InputType()
export class countriesCreateNestedOneWithoutMerchantsInput {

    @Field(() => countriesCreateWithoutMerchantsInput, {nullable:true})
    @Type(() => countriesCreateWithoutMerchantsInput)
    create?: countriesCreateWithoutMerchantsInput;

    @Field(() => countriesCreateOrConnectWithoutMerchantsInput, {nullable:true})
    @Type(() => countriesCreateOrConnectWithoutMerchantsInput)
    connectOrCreate?: countriesCreateOrConnectWithoutMerchantsInput;

    @Field(() => countriesWhereUniqueInput, {nullable:true})
    @Type(() => countriesWhereUniqueInput)
    connect?: Prisma.AtLeast<countriesWhereUniqueInput, 'code'>;
}
