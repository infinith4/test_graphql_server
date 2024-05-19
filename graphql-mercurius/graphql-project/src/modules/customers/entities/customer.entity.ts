import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { customer_addresses } from '../../customer-addresses/entities/customer-address.entity';
import { users } from '../../users/entities/user.entity';
import { CustomersCount } from './customers-count.output';

@ObjectType()
export class customers {

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

    @Field(() => [customer_addresses], {nullable:true})
    customer_addresses?: Array<customer_addresses>;

    @Field(() => users, {nullable:false})
    users?: users;

    @Field(() => CustomersCount, {nullable:false})
    _count?: CustomersCount;
}
