import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateInput } from './users-create.input';
import { usersUpdateInput } from './users-update.input';

@ArgsType()
export class UpsertOneusersArgs {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: Prisma.AtLeast<usersWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => usersCreateInput, {nullable:false})
    @Type(() => usersCreateInput)
    create!: usersCreateInput;

    @Field(() => usersUpdateInput, {nullable:false})
    @Type(() => usersUpdateInput)
    update!: usersUpdateInput;
}
