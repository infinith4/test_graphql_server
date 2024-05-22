import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { merchantsCreateWithoutUsersInput } from './merchants-create-without-users.input';
import { Type } from 'class-transformer';
import { merchantsCreateOrConnectWithoutUsersInput } from './merchants-create-or-connect-without-users.input';
import { merchantsCreateManyUsersInputEnvelope } from './merchants-create-many-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { merchantsWhereUniqueInput } from './merchants-where-unique.input';

@InputType()
export class merchantsCreateNestedManyWithoutUsersInput {

    @Field(() => [merchantsCreateWithoutUsersInput], {nullable:true})
    @Type(() => merchantsCreateWithoutUsersInput)
    create?: Array<merchantsCreateWithoutUsersInput>;

    @Field(() => [merchantsCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => merchantsCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<merchantsCreateOrConnectWithoutUsersInput>;

    @Field(() => merchantsCreateManyUsersInputEnvelope, {nullable:true})
    @Type(() => merchantsCreateManyUsersInputEnvelope)
    createMany?: merchantsCreateManyUsersInputEnvelope;

    @Field(() => [merchantsWhereUniqueInput], {nullable:true})
    @Type(() => merchantsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<merchantsWhereUniqueInput, 'id'>>;
}
