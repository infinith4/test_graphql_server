import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutCustomersInput } from './users-create-without-customers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutCustomersInput } from './users-create-or-connect-without-customers.input';
import { Prisma } from '@prisma/client';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutCustomersInput {

    @Field(() => usersCreateWithoutCustomersInput, {nullable:true})
    @Type(() => usersCreateWithoutCustomersInput)
    create?: usersCreateWithoutCustomersInput;

    @Field(() => usersCreateOrConnectWithoutCustomersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutCustomersInput)
    connectOrCreate?: usersCreateOrConnectWithoutCustomersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: Prisma.AtLeast<usersWhereUniqueInput, 'id' | 'username' | 'email'>;
}
