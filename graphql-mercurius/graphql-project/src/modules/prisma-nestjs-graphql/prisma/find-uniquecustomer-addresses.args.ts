import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customer_addressesWhereUniqueInput } from '../customer-addresses/customer-addresses-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquecustomerAddressesArgs {

    @Field(() => customer_addressesWhereUniqueInput, {nullable:false})
    @Type(() => customer_addressesWhereUniqueInput)
    where!: customer_addressesWhereUniqueInput;
}
