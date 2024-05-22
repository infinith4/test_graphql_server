import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { countriesUpdateWithoutMerchantsInput } from './countries-update-without-merchants.input';
import { Type } from 'class-transformer';
import { countriesCreateWithoutMerchantsInput } from './countries-create-without-merchants.input';
import { countriesWhereInput } from './countries-where.input';

@InputType()
export class countriesUpsertWithoutMerchantsInput {

    @Field(() => countriesUpdateWithoutMerchantsInput, {nullable:false})
    @Type(() => countriesUpdateWithoutMerchantsInput)
    update!: countriesUpdateWithoutMerchantsInput;

    @Field(() => countriesCreateWithoutMerchantsInput, {nullable:false})
    @Type(() => countriesCreateWithoutMerchantsInput)
    create!: countriesCreateWithoutMerchantsInput;

    @Field(() => countriesWhereInput, {nullable:true})
    @Type(() => countriesWhereInput)
    where?: countriesWhereInput;
}
