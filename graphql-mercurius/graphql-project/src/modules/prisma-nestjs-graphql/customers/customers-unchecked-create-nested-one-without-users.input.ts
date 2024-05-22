import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersCreateWithoutUsersInput } from './customers-create-without-users.input';
import { Type } from 'class-transformer';
import { customersCreateOrConnectWithoutUsersInput } from './customers-create-or-connect-without-users.input';
import { Prisma } from '@prisma/client';
import { customersWhereUniqueInput } from './customers-where-unique.input';

@InputType()
export class customersUncheckedCreateNestedOneWithoutUsersInput {

    @Field(() => customersCreateWithoutUsersInput, {nullable:true})
    @Type(() => customersCreateWithoutUsersInput)
    create?: customersCreateWithoutUsersInput;

    @Field(() => customersCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => customersCreateOrConnectWithoutUsersInput)
    connectOrCreate?: customersCreateOrConnectWithoutUsersInput;

    @Field(() => customersWhereUniqueInput, {nullable:true})
    @Type(() => customersWhereUniqueInput)
    connect?: Prisma.AtLeast<customersWhereUniqueInput, 'id' | 'user_id'>;
}
