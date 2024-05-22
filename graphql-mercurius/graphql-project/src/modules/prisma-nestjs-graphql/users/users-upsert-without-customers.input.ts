import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutCustomersInput } from './users-update-without-customers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutCustomersInput } from './users-create-without-customers.input';
import { usersWhereInput } from './users-where.input';

@InputType()
export class usersUpsertWithoutCustomersInput {

    @Field(() => usersUpdateWithoutCustomersInput, {nullable:false})
    @Type(() => usersUpdateWithoutCustomersInput)
    update!: usersUpdateWithoutCustomersInput;

    @Field(() => usersCreateWithoutCustomersInput, {nullable:false})
    @Type(() => usersCreateWithoutCustomersInput)
    create!: usersCreateWithoutCustomersInput;

    @Field(() => usersWhereInput, {nullable:true})
    @Type(() => usersWhereInput)
    where?: usersWhereInput;
}
