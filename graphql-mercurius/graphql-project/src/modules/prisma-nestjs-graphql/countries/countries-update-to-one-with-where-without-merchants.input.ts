import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { countriesWhereInput } from './countries-where.input';
import { Type } from 'class-transformer';
import { countriesUpdateWithoutMerchantsInput } from './countries-update-without-merchants.input';

@InputType()
export class countriesUpdateToOneWithWhereWithoutMerchantsInput {

    @Field(() => countriesWhereInput, {nullable:true})
    @Type(() => countriesWhereInput)
    where?: countriesWhereInput;

    @Field(() => countriesUpdateWithoutMerchantsInput, {nullable:false})
    @Type(() => countriesUpdateWithoutMerchantsInput)
    data!: countriesUpdateWithoutMerchantsInput;
}
