import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutMerchantsInput } from './users-create-without-merchants.input';

@InputType()
export class usersCreateOrConnectWithoutMerchantsInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: Prisma.AtLeast<usersWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => usersCreateWithoutMerchantsInput, {nullable:false})
    @Type(() => usersCreateWithoutMerchantsInput)
    create!: usersCreateWithoutMerchantsInput;
}
