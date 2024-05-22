import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { profilesUpdateManyMutationInput } from './profiles-update-many-mutation.input';
import { Type } from 'class-transformer';
import { profilesWhereInput } from './profiles-where.input';

@ArgsType()
export class UpdateManyprofilesArgs {

    @Field(() => profilesUpdateManyMutationInput, {nullable:false})
    @Type(() => profilesUpdateManyMutationInput)
    data!: profilesUpdateManyMutationInput;

    @Field(() => profilesWhereInput, {nullable:true})
    @Type(() => profilesWhereInput)
    where?: profilesWhereInput;
}
