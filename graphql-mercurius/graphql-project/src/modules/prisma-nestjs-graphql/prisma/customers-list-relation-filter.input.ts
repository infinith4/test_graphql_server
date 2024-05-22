import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersWhereInput } from '../customers/customers-where.input';

@InputType()
export class CustomersListRelationFilter {

    @Field(() => customersWhereInput, {nullable:true})
    every?: customersWhereInput;

    @Field(() => customersWhereInput, {nullable:true})
    some?: customersWhereInput;

    @Field(() => customersWhereInput, {nullable:true})
    none?: customersWhereInput;
}
