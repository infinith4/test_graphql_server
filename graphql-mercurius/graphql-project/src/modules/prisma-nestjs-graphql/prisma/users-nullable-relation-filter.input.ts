import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereInput } from '../users/users-where.input';

@InputType()
export class UsersNullableRelationFilter {

    @Field(() => usersWhereInput, {nullable:true})
    is?: usersWhereInput;

    @Field(() => usersWhereInput, {nullable:true})
    isNot?: usersWhereInput;
}
