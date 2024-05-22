import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customer_addressesUpdateManyMutationInput } from '../customer-addresses/customer-addresses-update-many-mutation.input';
import { Type } from 'class-transformer';
import { customer_addressesWhereInput } from '../customer-addresses/customer-addresses-where.input';

@ArgsType()
export class UpdateManycustomerAddressesArgs {

    @Field(() => customer_addressesUpdateManyMutationInput, {nullable:false})
    @Type(() => customer_addressesUpdateManyMutationInput)
    data!: customer_addressesUpdateManyMutationInput;

    @Field(() => customer_addressesWhereInput, {nullable:true})
    @Type(() => customer_addressesWhereInput)
    where?: customer_addressesWhereInput;
}
