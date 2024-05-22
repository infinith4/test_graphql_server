import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereInput } from './users-where.input';
import { Type } from 'class-transformer';
import { usersUpdateWithoutCustomersInput } from './users-update-without-customers.input';

@InputType()
export class usersUpdateToOneWithWhereWithoutCustomersInput {

    @Field(() => usersWhereInput, {nullable:true})
    @Type(() => usersWhereInput)
    where?: usersWhereInput;

    @Field(() => usersUpdateWithoutCustomersInput, {nullable:false})
    @Type(() => usersUpdateWithoutCustomersInput)
    data!: usersUpdateWithoutCustomersInput;
}
