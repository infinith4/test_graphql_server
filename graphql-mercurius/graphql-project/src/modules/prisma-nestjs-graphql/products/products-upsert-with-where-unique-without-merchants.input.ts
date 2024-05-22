import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { productsWhereUniqueInput } from './products-where-unique.input';
import { Type } from 'class-transformer';
import { productsUpdateWithoutMerchantsInput } from './products-update-without-merchants.input';
import { productsCreateWithoutMerchantsInput } from './products-create-without-merchants.input';

@InputType()
export class productsUpsertWithWhereUniqueWithoutMerchantsInput {

    @Field(() => productsWhereUniqueInput, {nullable:false})
    @Type(() => productsWhereUniqueInput)
    where!: Prisma.AtLeast<productsWhereUniqueInput, 'id'>;

    @Field(() => productsUpdateWithoutMerchantsInput, {nullable:false})
    @Type(() => productsUpdateWithoutMerchantsInput)
    update!: productsUpdateWithoutMerchantsInput;

    @Field(() => productsCreateWithoutMerchantsInput, {nullable:false})
    @Type(() => productsCreateWithoutMerchantsInput)
    create!: productsCreateWithoutMerchantsInput;
}
