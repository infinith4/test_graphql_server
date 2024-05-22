import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { merchantsWhereUniqueInput } from './merchants-where-unique.input';
import { Type } from 'class-transformer';
import { merchantsCreateWithoutUsersInput } from './merchants-create-without-users.input';

@InputType()
export class merchantsCreateOrConnectWithoutUsersInput {

    @Field(() => merchantsWhereUniqueInput, {nullable:false})
    @Type(() => merchantsWhereUniqueInput)
    where!: Prisma.AtLeast<merchantsWhereUniqueInput, 'id'>;

    @Field(() => merchantsCreateWithoutUsersInput, {nullable:false})
    @Type(() => merchantsCreateWithoutUsersInput)
    create!: merchantsCreateWithoutUsersInput;
}
