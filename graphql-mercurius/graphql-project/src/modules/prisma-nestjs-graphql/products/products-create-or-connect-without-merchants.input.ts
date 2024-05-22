import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { productsWhereUniqueInput } from './products-where-unique.input';
import { Type } from 'class-transformer';
import { productsCreateWithoutMerchantsInput } from './products-create-without-merchants.input';

@InputType()
export class productsCreateOrConnectWithoutMerchantsInput {

    @Field(() => productsWhereUniqueInput, {nullable:false})
    @Type(() => productsWhereUniqueInput)
    where!: Prisma.AtLeast<productsWhereUniqueInput, 'id'>;

    @Field(() => productsCreateWithoutMerchantsInput, {nullable:false})
    @Type(() => productsCreateWithoutMerchantsInput)
    create!: productsCreateWithoutMerchantsInput;
}
