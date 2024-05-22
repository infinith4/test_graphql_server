import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersCreateWithoutUsersInput } from './customers-create-without-users.input';
import { Type } from 'class-transformer';
import { customersCreateOrConnectWithoutUsersInput } from './customers-create-or-connect-without-users.input';
import { customersUpsertWithoutUsersInput } from './customers-upsert-without-users.input';
import { customersWhereInput } from './customers-where.input';
import { Prisma } from '@prisma/client';
import { customersWhereUniqueInput } from './customers-where-unique.input';
import { customersUpdateToOneWithWhereWithoutUsersInput } from './customers-update-to-one-with-where-without-users.input';

@InputType()
export class customersUncheckedUpdateOneWithoutUsersNestedInput {

    @Field(() => customersCreateWithoutUsersInput, {nullable:true})
    @Type(() => customersCreateWithoutUsersInput)
    create?: customersCreateWithoutUsersInput;

    @Field(() => customersCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => customersCreateOrConnectWithoutUsersInput)
    connectOrCreate?: customersCreateOrConnectWithoutUsersInput;

    @Field(() => customersUpsertWithoutUsersInput, {nullable:true})
    @Type(() => customersUpsertWithoutUsersInput)
    upsert?: customersUpsertWithoutUsersInput;

    @Field(() => customersWhereInput, {nullable:true})
    @Type(() => customersWhereInput)
    disconnect?: customersWhereInput;

    @Field(() => customersWhereInput, {nullable:true})
    @Type(() => customersWhereInput)
    delete?: customersWhereInput;

    @Field(() => customersWhereUniqueInput, {nullable:true})
    @Type(() => customersWhereUniqueInput)
    connect?: Prisma.AtLeast<customersWhereUniqueInput, 'id' | 'user_id'>;

    @Field(() => customersUpdateToOneWithWhereWithoutUsersInput, {nullable:true})
    @Type(() => customersUpdateToOneWithWhereWithoutUsersInput)
    update?: customersUpdateToOneWithWhereWithoutUsersInput;
}
