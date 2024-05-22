import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { countriesWhereInput } from './countries-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManycountriesArgs {

    @Field(() => countriesWhereInput, {nullable:true})
    @Type(() => countriesWhereInput)
    where?: countriesWhereInput;
}
