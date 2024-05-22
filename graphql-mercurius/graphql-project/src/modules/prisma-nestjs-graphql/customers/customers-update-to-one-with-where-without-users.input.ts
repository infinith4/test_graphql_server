import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersWhereInput } from './customers-where.input';
import { Type } from 'class-transformer';
import { customersUpdateWithoutUsersInput } from './customers-update-without-users.input';

@InputType()
export class customersUpdateToOneWithWhereWithoutUsersInput {

    @Field(() => customersWhereInput, {nullable:true})
    @Type(() => customersWhereInput)
    where?: customersWhereInput;

    @Field(() => customersUpdateWithoutUsersInput, {nullable:false})
    @Type(() => customersUpdateWithoutUsersInput)
    data!: customersUpdateWithoutUsersInput;
}
