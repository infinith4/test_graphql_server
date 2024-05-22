import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customer_addressesCreateManyCustomersInput } from './customer-addresses-create-many-customers.input';
import { Type } from 'class-transformer';

@InputType()
export class customer_addressesCreateManyCustomersInputEnvelope {

    @Field(() => [customer_addressesCreateManyCustomersInput], {nullable:false})
    @Type(() => customer_addressesCreateManyCustomersInput)
    data!: Array<customer_addressesCreateManyCustomersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
