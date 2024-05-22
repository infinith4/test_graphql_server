import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { profilesWhereInput } from './profiles-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyprofilesArgs {

    @Field(() => profilesWhereInput, {nullable:true})
    @Type(() => profilesWhereInput)
    where?: profilesWhereInput;
}
