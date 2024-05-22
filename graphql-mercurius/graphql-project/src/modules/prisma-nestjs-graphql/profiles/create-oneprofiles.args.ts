import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { profilesCreateInput } from './profiles-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneprofilesArgs {

    @Field(() => profilesCreateInput, {nullable:false})
    @Type(() => profilesCreateInput)
    data!: profilesCreateInput;
}
