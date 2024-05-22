import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { profilesWhereInput } from '../profiles/profiles-where.input';

@InputType()
export class ProfilesRelationFilter {

    @Field(() => profilesWhereInput, {nullable:true})
    is?: profilesWhereInput;

    @Field(() => profilesWhereInput, {nullable:true})
    isNot?: profilesWhereInput;
}
