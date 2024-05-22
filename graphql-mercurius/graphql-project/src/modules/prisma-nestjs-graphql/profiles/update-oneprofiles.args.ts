import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { profilesUpdateInput } from './profiles-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { profilesWhereUniqueInput } from './profiles-where-unique.input';

@ArgsType()
export class UpdateOneprofilesArgs {

    @Field(() => profilesUpdateInput, {nullable:false})
    @Type(() => profilesUpdateInput)
    data!: profilesUpdateInput;

    @Field(() => profilesWhereUniqueInput, {nullable:false})
    @Type(() => profilesWhereUniqueInput)
    where!: Prisma.AtLeast<profilesWhereUniqueInput, 'id' | 'user_id'>;
}
