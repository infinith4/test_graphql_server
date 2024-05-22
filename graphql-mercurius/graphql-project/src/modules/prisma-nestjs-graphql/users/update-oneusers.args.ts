import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { usersUpdateInput } from './users-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { usersWhereUniqueInput } from './users-where-unique.input';

@ArgsType()
export class UpdateOneusersArgs {

    @Field(() => usersUpdateInput, {nullable:false})
    @Type(() => usersUpdateInput)
    data!: usersUpdateInput;

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: Prisma.AtLeast<usersWhereUniqueInput, 'id' | 'username' | 'email'>;
}
