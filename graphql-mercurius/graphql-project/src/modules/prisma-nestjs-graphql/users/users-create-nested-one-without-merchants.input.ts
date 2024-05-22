import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutMerchantsInput } from './users-create-without-merchants.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutMerchantsInput } from './users-create-or-connect-without-merchants.input';
import { Prisma } from '@prisma/client';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutMerchantsInput {

    @Field(() => usersCreateWithoutMerchantsInput, {nullable:true})
    @Type(() => usersCreateWithoutMerchantsInput)
    create?: usersCreateWithoutMerchantsInput;

    @Field(() => usersCreateOrConnectWithoutMerchantsInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutMerchantsInput)
    connectOrCreate?: usersCreateOrConnectWithoutMerchantsInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: Prisma.AtLeast<usersWhereUniqueInput, 'id' | 'username' | 'email'>;
}
