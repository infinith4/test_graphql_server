import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customer_addressesCreateManyInput } from '../customer-addresses/customer-addresses-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManycustomerAddressesArgs {

    @Field(() => [customer_addressesCreateManyInput], {nullable:false})
    @Type(() => customer_addressesCreateManyInput)
    data!: Array<customer_addressesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
