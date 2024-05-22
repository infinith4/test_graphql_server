import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customer_addressesCreateInput } from '../customer-addresses/customer-addresses-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnecustomerAddressesArgs {

    @Field(() => customer_addressesCreateInput, {nullable:false})
    @Type(() => customer_addressesCreateInput)
    data!: customer_addressesCreateInput;
}
