import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereInput } from '../users/users-where.input';

@InputType()
export class UsersListRelationFilter {

    @Field(() => usersWhereInput, {nullable:true})
    every?: usersWhereInput;

    @Field(() => usersWhereInput, {nullable:true})
    some?: usersWhereInput;

    @Field(() => usersWhereInput, {nullable:true})
    none?: usersWhereInput;
}
