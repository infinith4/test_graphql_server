import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UsersCount {

    @Field(() => Int, {nullable:false})
    articles!: number;

    @Field(() => Int, {nullable:false})
    carts!: number;

    @Field(() => Int, {nullable:false})
    orders!: number;
}
