import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { countriesUpdateManyMutationInput } from './countries-update-many-mutation.input';
import { Type } from 'class-transformer';
import { countriesWhereInput } from './countries-where.input';

@ArgsType()
export class UpdateManycountriesArgs {

    @Field(() => countriesUpdateManyMutationInput, {nullable:false})
    @Type(() => countriesUpdateManyMutationInput)
    data!: countriesUpdateManyMutationInput;

    @Field(() => countriesWhereInput, {nullable:true})
    @Type(() => countriesWhereInput)
    where?: countriesWhereInput;
}
