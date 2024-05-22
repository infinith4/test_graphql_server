import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { customersWhereUniqueInput } from './customers-where-unique.input';
import { Type } from 'class-transformer';
import { customersCreateWithoutUsersInput } from './customers-create-without-users.input';

@InputType()
export class customersCreateOrConnectWithoutUsersInput {

    @Field(() => customersWhereUniqueInput, {nullable:false})
    @Type(() => customersWhereUniqueInput)
    where!: Prisma.AtLeast<customersWhereUniqueInput, 'id' | 'user_id'>;

    @Field(() => customersCreateWithoutUsersInput, {nullable:false})
    @Type(() => customersCreateWithoutUsersInput)
    create!: customersCreateWithoutUsersInput;
}
