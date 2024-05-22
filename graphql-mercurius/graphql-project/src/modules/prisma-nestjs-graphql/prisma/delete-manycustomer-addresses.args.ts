import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customer_addressesWhereInput } from '../customer-addresses/customer-addresses-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManycustomerAddressesArgs {

    @Field(() => customer_addressesWhereInput, {nullable:true})
    @Type(() => customer_addressesWhereInput)
    where?: customer_addressesWhereInput;
}
