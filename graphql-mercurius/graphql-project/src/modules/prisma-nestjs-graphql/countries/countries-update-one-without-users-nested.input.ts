import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { countriesCreateWithoutUsersInput } from './countries-create-without-users.input';
import { Type } from 'class-transformer';
import { countriesCreateOrConnectWithoutUsersInput } from './countries-create-or-connect-without-users.input';
import { countriesUpsertWithoutUsersInput } from './countries-upsert-without-users.input';
import { countriesWhereInput } from './countries-where.input';
import { Prisma } from '@prisma/client';
import { countriesWhereUniqueInput } from './countries-where-unique.input';
import { countriesUpdateToOneWithWhereWithoutUsersInput } from './countries-update-to-one-with-where-without-users.input';

@InputType()
export class countriesUpdateOneWithoutUsersNestedInput {

    @Field(() => countriesCreateWithoutUsersInput, {nullable:true})
    @Type(() => countriesCreateWithoutUsersInput)
    create?: countriesCreateWithoutUsersInput;

    @Field(() => countriesCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => countriesCreateOrConnectWithoutUsersInput)
    connectOrCreate?: countriesCreateOrConnectWithoutUsersInput;

    @Field(() => countriesUpsertWithoutUsersInput, {nullable:true})
    @Type(() => countriesUpsertWithoutUsersInput)
    upsert?: countriesUpsertWithoutUsersInput;

    @Field(() => countriesWhereInput, {nullable:true})
    @Type(() => countriesWhereInput)
    disconnect?: countriesWhereInput;

    @Field(() => countriesWhereInput, {nullable:true})
    @Type(() => countriesWhereInput)
    delete?: countriesWhereInput;

    @Field(() => countriesWhereUniqueInput, {nullable:true})
    @Type(() => countriesWhereUniqueInput)
    connect?: Prisma.AtLeast<countriesWhereUniqueInput, 'code'>;

    @Field(() => countriesUpdateToOneWithWhereWithoutUsersInput, {nullable:true})
    @Type(() => countriesUpdateToOneWithWhereWithoutUsersInput)
    update?: countriesUpdateToOneWithWhereWithoutUsersInput;
}
