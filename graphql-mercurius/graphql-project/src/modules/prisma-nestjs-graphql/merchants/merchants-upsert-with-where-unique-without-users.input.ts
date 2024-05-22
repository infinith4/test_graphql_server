import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { merchantsWhereUniqueInput } from './merchants-where-unique.input';
import { Type } from 'class-transformer';
import { merchantsUpdateWithoutUsersInput } from './merchants-update-without-users.input';
import { merchantsCreateWithoutUsersInput } from './merchants-create-without-users.input';

@InputType()
export class merchantsUpsertWithWhereUniqueWithoutUsersInput {

    @Field(() => merchantsWhereUniqueInput, {nullable:false})
    @Type(() => merchantsWhereUniqueInput)
    where!: Prisma.AtLeast<merchantsWhereUniqueInput, 'id'>;

    @Field(() => merchantsUpdateWithoutUsersInput, {nullable:false})
    @Type(() => merchantsUpdateWithoutUsersInput)
    update!: merchantsUpdateWithoutUsersInput;

    @Field(() => merchantsCreateWithoutUsersInput, {nullable:false})
    @Type(() => merchantsCreateWithoutUsersInput)
    create!: merchantsCreateWithoutUsersInput;
}
