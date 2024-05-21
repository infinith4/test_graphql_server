import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CustomerAddress } from '../../customer-addresses/entities/customer-address.entity';
import { users } from '../../users/entities/user.entity';
import { CustomerCount } from './customers-count.output';

@ObjectType()
export class Customer {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => String, {nullable:true})
    address!: string | null;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => Date, {nullable:true})
    created_at!: Date | null;

    @Field(() => Date, {nullable:true})
    updated_at!: Date | null;

    @Field(() => [CustomerAddress], {nullable:true})
    customer_addresses?: Array<CustomerAddress>;

    @Field(() => users, {nullable:false})
    users?: users;

    @Field(() => CustomerCount, {nullable:false})
    _count?: CustomerCount;
}
