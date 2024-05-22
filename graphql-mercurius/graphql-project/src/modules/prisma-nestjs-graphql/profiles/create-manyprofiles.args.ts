import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { profilesCreateManyInput } from './profiles-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyprofilesArgs {

    @Field(() => [profilesCreateManyInput], {nullable:false})
    @Type(() => profilesCreateManyInput)
    data!: Array<profilesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
