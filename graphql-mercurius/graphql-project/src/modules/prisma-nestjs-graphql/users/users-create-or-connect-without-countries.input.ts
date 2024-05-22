import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutCountriesInput } from './users-create-without-countries.input';

@InputType()
export class usersCreateOrConnectWithoutCountriesInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: Prisma.AtLeast<usersWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => usersCreateWithoutCountriesInput, {nullable:false})
    @Type(() => usersCreateWithoutCountriesInput)
    create!: usersCreateWithoutCountriesInput;
}
