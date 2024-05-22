import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customer_addressesWhereInput } from '../customer-addresses/customer-addresses-where.input';

@InputType()
export class Customer_addressesListRelationFilter {

    @Field(() => customer_addressesWhereInput, {nullable:true})
    every?: customer_addressesWhereInput;

    @Field(() => customer_addressesWhereInput, {nullable:true})
    some?: customer_addressesWhereInput;

    @Field(() => customer_addressesWhereInput, {nullable:true})
    none?: customer_addressesWhereInput;
}
