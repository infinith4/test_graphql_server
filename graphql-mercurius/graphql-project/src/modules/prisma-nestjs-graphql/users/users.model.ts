import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { articles } from '../articles/articles.model';
import { carts } from '../carts/carts.model';
import { customers } from '../customers/customers.model';
import { orders } from '../orders/orders.model';
import { UsersCount } from '../prisma/users-count.output';

@ObjectType()
export class users {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    hashed_password!: string;

    @Field(() => Date, {nullable:true})
    created_at!: Date | null;

    @Field(() => Date, {nullable:true})
    updated_at!: Date | null;

    @Field(() => [articles], {nullable:true})
    articles?: Array<articles>;

    @Field(() => [carts], {nullable:true})
    carts?: Array<carts>;

    @Field(() => customers, {nullable:true})
    customers?: customers | null;

    @Field(() => [orders], {nullable:true})
    orders?: Array<orders>;

    @Field(() => UsersCount, {nullable:false})
    _count?: UsersCount;
}
