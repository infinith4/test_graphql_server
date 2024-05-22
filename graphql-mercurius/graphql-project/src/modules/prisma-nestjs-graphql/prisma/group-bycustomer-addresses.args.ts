import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customer_addressesWhereInput } from '../customer-addresses/customer-addresses-where.input';
import { Type } from 'class-transformer';
import { customer_addressesOrderByWithAggregationInput } from '../customer-addresses/customer-addresses-order-by-with-aggregation.input';
import { Customer_addressesScalarFieldEnum } from './customer-addresses-scalar-field.enum';
import { customer_addressesScalarWhereWithAggregatesInput } from '../customer-addresses/customer-addresses-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBycustomerAddressesArgs {

    @Field(() => customer_addressesWhereInput, {nullable:true})
    @Type(() => customer_addressesWhereInput)
    where?: customer_addressesWhereInput;

    @Field(() => [customer_addressesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<customer_addressesOrderByWithAggregationInput>;

    @Field(() => [Customer_addressesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Customer_addressesScalarFieldEnum>;

    @Field(() => customer_addressesScalarWhereWithAggregatesInput, {nullable:true})
    having?: customer_addressesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
