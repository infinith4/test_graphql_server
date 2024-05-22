import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersScalarWhereInput } from './users-scalar-where.input';
import { Type } from 'class-transformer';
import { usersUpdateManyMutationInput } from './users-update-many-mutation.input';

@InputType()
export class usersUpdateManyWithWhereWithoutCountriesInput {

    @Field(() => usersScalarWhereInput, {nullable:false})
    @Type(() => usersScalarWhereInput)
    where!: usersScalarWhereInput;

    @Field(() => usersUpdateManyMutationInput, {nullable:false})
    @Type(() => usersUpdateManyMutationInput)
    data!: usersUpdateManyMutationInput;
}
