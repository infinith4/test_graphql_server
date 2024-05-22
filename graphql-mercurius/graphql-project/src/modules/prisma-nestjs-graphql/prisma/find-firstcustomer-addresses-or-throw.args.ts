import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customer_addressesWhereInput } from '../customer-addresses/customer-addresses-where.input';
import { Type } from 'class-transformer';
import { customer_addressesOrderByWithRelationInput } from '../customer-addresses/customer-addresses-order-by-with-relation.input';
import { customer_addressesWhereUniqueInput } from '../customer-addresses/customer-addresses-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Customer_addressesScalarFieldEnum } from './customer-addresses-scalar-field.enum';

@ArgsType()
export class FindFirstcustomerAddressesOrThrowArgs {

    @Field(() => customer_addressesWhereInput, {nullable:true})
    @Type(() => customer_addressesWhereInput)
    where?: customer_addressesWhereInput;

    @Field(() => [customer_addressesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<customer_addressesOrderByWithRelationInput>;

    @Field(() => customer_addressesWhereUniqueInput, {nullable:true})
    cursor?: customer_addressesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Customer_addressesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Customer_addressesScalarFieldEnum>;
}
