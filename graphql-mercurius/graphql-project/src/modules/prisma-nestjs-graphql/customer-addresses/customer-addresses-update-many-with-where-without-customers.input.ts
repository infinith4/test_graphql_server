import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customer_addressesScalarWhereInput } from './customer-addresses-scalar-where.input';
import { Type } from 'class-transformer';
import { customer_addressesUpdateManyMutationInput } from './customer-addresses-update-many-mutation.input';

@InputType()
export class customer_addressesUpdateManyWithWhereWithoutCustomersInput {

    @Field(() => customer_addressesScalarWhereInput, {nullable:false})
    @Type(() => customer_addressesScalarWhereInput)
    where!: customer_addressesScalarWhereInput;

    @Field(() => customer_addressesUpdateManyMutationInput, {nullable:false})
    @Type(() => customer_addressesUpdateManyMutationInput)
    data!: customer_addressesUpdateManyMutationInput;
}
