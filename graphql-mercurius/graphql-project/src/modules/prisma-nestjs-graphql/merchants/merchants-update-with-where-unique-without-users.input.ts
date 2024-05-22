import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { merchantsWhereUniqueInput } from './merchants-where-unique.input';
import { Type } from 'class-transformer';
import { merchantsUpdateWithoutUsersInput } from './merchants-update-without-users.input';

@InputType()
export class merchantsUpdateWithWhereUniqueWithoutUsersInput {

    @Field(() => merchantsWhereUniqueInput, {nullable:false})
    @Type(() => merchantsWhereUniqueInput)
    where!: Prisma.AtLeast<merchantsWhereUniqueInput, 'id'>;

    @Field(() => merchantsUpdateWithoutUsersInput, {nullable:false})
    @Type(() => merchantsUpdateWithoutUsersInput)
    data!: merchantsUpdateWithoutUsersInput;
}
