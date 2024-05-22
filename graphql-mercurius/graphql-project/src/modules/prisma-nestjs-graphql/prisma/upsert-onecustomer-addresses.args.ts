import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customer_addressesWhereUniqueInput } from '../customer-addresses/customer-addresses-where-unique.input';
import { Type } from 'class-transformer';
import { customer_addressesCreateInput } from '../customer-addresses/customer-addresses-create.input';
import { customer_addressesUpdateInput } from '../customer-addresses/customer-addresses-update.input';

@ArgsType()
export class UpsertOnecustomerAddressesArgs {

    @Field(() => customer_addressesWhereUniqueInput, {nullable:false})
    @Type(() => customer_addressesWhereUniqueInput)
    where!: customer_addressesWhereUniqueInput;

    @Field(() => customer_addressesCreateInput, {nullable:false})
    @Type(() => customer_addressesCreateInput)
    create!: customer_addressesCreateInput;

    @Field(() => customer_addressesUpdateInput, {nullable:false})
    @Type(() => customer_addressesUpdateInput)
    update!: customer_addressesUpdateInput;
}
