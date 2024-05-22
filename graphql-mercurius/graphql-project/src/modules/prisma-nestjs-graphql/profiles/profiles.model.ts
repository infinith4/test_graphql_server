import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { users } from '../users/users.model';

@ObjectType()
export class profiles {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    user_id!: number | null;

    @Field(() => String, {nullable:true})
    bio!: string | null;

    @Field(() => String, {nullable:true})
    website!: string | null;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:true})
    updated_at!: Date | null;

    @Field(() => users, {nullable:true})
    users?: users | null;
}
