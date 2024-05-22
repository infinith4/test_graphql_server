import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutCustomersInput } from './users-create-without-customers.input';

@InputType()
export class usersCreateOrConnectWithoutCustomersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: Prisma.AtLeast<usersWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => usersCreateWithoutCustomersInput, {nullable:false})
    @Type(() => usersCreateWithoutCustomersInput)
    create!: usersCreateWithoutCustomersInput;
}
