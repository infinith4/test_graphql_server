import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { profilesWhereUniqueInput } from './profiles-where-unique.input';
import { Type } from 'class-transformer';
import { profilesCreateInput } from './profiles-create.input';
import { profilesUpdateInput } from './profiles-update.input';

@ArgsType()
export class UpsertOneprofilesArgs {

    @Field(() => profilesWhereUniqueInput, {nullable:false})
    @Type(() => profilesWhereUniqueInput)
    where!: Prisma.AtLeast<profilesWhereUniqueInput, 'id' | 'user_id'>;

    @Field(() => profilesCreateInput, {nullable:false})
    @Type(() => profilesCreateInput)
    create!: profilesCreateInput;

    @Field(() => profilesUpdateInput, {nullable:false})
    @Type(() => profilesUpdateInput)
    update!: profilesUpdateInput;
}
