import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutCustomersInput } from './users-create-without-customers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutCustomersInput } from './users-create-or-connect-without-customers.input';
import { usersUpsertWithoutCustomersInput } from './users-upsert-without-customers.input';
import { usersWhereInput } from './users-where.input';
import { Prisma } from '@prisma/client';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateToOneWithWhereWithoutCustomersInput } from './users-update-to-one-with-where-without-customers.input';

@InputType()
export class usersUpdateOneWithoutCustomersNestedInput {

    @Field(() => usersCreateWithoutCustomersInput, {nullable:true})
    @Type(() => usersCreateWithoutCustomersInput)
    create?: usersCreateWithoutCustomersInput;

    @Field(() => usersCreateOrConnectWithoutCustomersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutCustomersInput)
    connectOrCreate?: usersCreateOrConnectWithoutCustomersInput;

    @Field(() => usersUpsertWithoutCustomersInput, {nullable:true})
    @Type(() => usersUpsertWithoutCustomersInput)
    upsert?: usersUpsertWithoutCustomersInput;

    @Field(() => usersWhereInput, {nullable:true})
    @Type(() => usersWhereInput)
    disconnect?: usersWhereInput;

    @Field(() => usersWhereInput, {nullable:true})
    @Type(() => usersWhereInput)
    delete?: usersWhereInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: Prisma.AtLeast<usersWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => usersUpdateToOneWithWhereWithoutCustomersInput, {nullable:true})
    @Type(() => usersUpdateToOneWithWhereWithoutCustomersInput)
    update?: usersUpdateToOneWithWhereWithoutCustomersInput;
}
