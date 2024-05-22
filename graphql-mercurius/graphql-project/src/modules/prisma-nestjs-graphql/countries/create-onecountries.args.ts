import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { countriesCreateInput } from './countries-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnecountriesArgs {

    @Field(() => countriesCreateInput, {nullable:false})
    @Type(() => countriesCreateInput)
    data!: countriesCreateInput;
}
