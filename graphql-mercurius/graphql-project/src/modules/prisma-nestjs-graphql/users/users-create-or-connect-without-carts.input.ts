import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutCartsInput } from './users-create-without-carts.input';

@InputType()
export class usersCreateOrConnectWithoutCartsInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: Prisma.AtLeast<usersWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => usersCreateWithoutCartsInput, {nullable:false})
    @Type(() => usersCreateWithoutCartsInput)
    create!: usersCreateWithoutCartsInput;
}
