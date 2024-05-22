import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { countriesCreateWithoutUsersInput } from './countries-create-without-users.input';
import { Type } from 'class-transformer';
import { countriesCreateOrConnectWithoutUsersInput } from './countries-create-or-connect-without-users.input';
import { Prisma } from '@prisma/client';
import { countriesWhereUniqueInput } from './countries-where-unique.input';

@InputType()
export class countriesCreateNestedOneWithoutUsersInput {

    @Field(() => countriesCreateWithoutUsersInput, {nullable:true})
    @Type(() => countriesCreateWithoutUsersInput)
    create?: countriesCreateWithoutUsersInput;

    @Field(() => countriesCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => countriesCreateOrConnectWithoutUsersInput)
    connectOrCreate?: countriesCreateOrConnectWithoutUsersInput;

    @Field(() => countriesWhereUniqueInput, {nullable:true})
    @Type(() => countriesWhereUniqueInput)
    connect?: Prisma.AtLeast<countriesWhereUniqueInput, 'code'>;
}
