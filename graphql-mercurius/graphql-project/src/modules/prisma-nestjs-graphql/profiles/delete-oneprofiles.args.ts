import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { profilesWhereUniqueInput } from './profiles-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneprofilesArgs {

    @Field(() => profilesWhereUniqueInput, {nullable:false})
    @Type(() => profilesWhereUniqueInput)
    where!: Prisma.AtLeast<profilesWhereUniqueInput, 'id' | 'user_id'>;
}
