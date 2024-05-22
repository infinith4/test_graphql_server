import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customer_addressesUpdateInput } from '../customer-addresses/customer-addresses-update.input';
import { Type } from 'class-transformer';
import { customer_addressesWhereUniqueInput } from '../customer-addresses/customer-addresses-where-unique.input';

@ArgsType()
export class UpdateOnecustomerAddressesArgs {

    @Field(() => customer_addressesUpdateInput, {nullable:false})
    @Type(() => customer_addressesUpdateInput)
    data!: customer_addressesUpdateInput;

    @Field(() => customer_addressesWhereUniqueInput, {nullable:false})
    @Type(() => customer_addressesWhereUniqueInput)
    where!: customer_addressesWhereUniqueInput;
}
