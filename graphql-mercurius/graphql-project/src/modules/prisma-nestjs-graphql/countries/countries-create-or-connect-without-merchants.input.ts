import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { countriesWhereUniqueInput } from './countries-where-unique.input';
import { Type } from 'class-transformer';
import { countriesCreateWithoutMerchantsInput } from './countries-create-without-merchants.input';

@InputType()
export class countriesCreateOrConnectWithoutMerchantsInput {

    @Field(() => countriesWhereUniqueInput, {nullable:false})
    @Type(() => countriesWhereUniqueInput)
    where!: Prisma.AtLeast<countriesWhereUniqueInput, 'code'>;

    @Field(() => countriesCreateWithoutMerchantsInput, {nullable:false})
    @Type(() => countriesCreateWithoutMerchantsInput)
    create!: countriesCreateWithoutMerchantsInput;
}
