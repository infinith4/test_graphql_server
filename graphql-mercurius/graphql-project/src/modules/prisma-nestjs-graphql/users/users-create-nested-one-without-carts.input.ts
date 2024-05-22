import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutCartsInput } from './users-create-without-carts.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutCartsInput } from './users-create-or-connect-without-carts.input';
import { Prisma } from '@prisma/client';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutCartsInput {

    @Field(() => usersCreateWithoutCartsInput, {nullable:true})
    @Type(() => usersCreateWithoutCartsInput)
    create?: usersCreateWithoutCartsInput;

    @Field(() => usersCreateOrConnectWithoutCartsInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutCartsInput)
    connectOrCreate?: usersCreateOrConnectWithoutCartsInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: Prisma.AtLeast<usersWhereUniqueInput, 'id' | 'username' | 'email'>;
}
