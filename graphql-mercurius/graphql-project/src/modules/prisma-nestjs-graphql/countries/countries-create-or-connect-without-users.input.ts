import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { countriesWhereUniqueInput } from './countries-where-unique.input';
import { Type } from 'class-transformer';
import { countriesCreateWithoutUsersInput } from './countries-create-without-users.input';

@InputType()
export class countriesCreateOrConnectWithoutUsersInput {

    @Field(() => countriesWhereUniqueInput, {nullable:false})
    @Type(() => countriesWhereUniqueInput)
    where!: Prisma.AtLeast<countriesWhereUniqueInput, 'code'>;

    @Field(() => countriesCreateWithoutUsersInput, {nullable:false})
    @Type(() => countriesCreateWithoutUsersInput)
    create!: countriesCreateWithoutUsersInput;
}
