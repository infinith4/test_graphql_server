import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersUpdateWithoutUsersInput } from './customers-update-without-users.input';
import { Type } from 'class-transformer';
import { customersCreateWithoutUsersInput } from './customers-create-without-users.input';
import { customersWhereInput } from './customers-where.input';

@InputType()
export class customersUpsertWithoutUsersInput {

    @Field(() => customersUpdateWithoutUsersInput, {nullable:false})
    @Type(() => customersUpdateWithoutUsersInput)
    update!: customersUpdateWithoutUsersInput;

    @Field(() => customersCreateWithoutUsersInput, {nullable:false})
    @Type(() => customersCreateWithoutUsersInput)
    create!: customersCreateWithoutUsersInput;

    @Field(() => customersWhereInput, {nullable:true})
    @Type(() => customersWhereInput)
    where?: customersWhereInput;
}
