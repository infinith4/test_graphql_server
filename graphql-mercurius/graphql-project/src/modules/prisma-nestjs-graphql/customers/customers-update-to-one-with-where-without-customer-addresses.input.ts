import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersWhereInput } from './customers-where.input';
import { Type } from 'class-transformer';
import { customersUpdateWithoutCustomer_addressesInput } from './customers-update-without-customer-addresses.input';

@InputType()
export class customersUpdateToOneWithWhereWithoutCustomer_addressesInput {

    @Field(() => customersWhereInput, {nullable:true})
    @Type(() => customersWhereInput)
    where?: customersWhereInput;

    @Field(() => customersUpdateWithoutCustomer_addressesInput, {nullable:false})
    @Type(() => customersUpdateWithoutCustomer_addressesInput)
    data!: customersUpdateWithoutCustomer_addressesInput;
}
