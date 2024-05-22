import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { countriesCreateManyInput } from './countries-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManycountriesArgs {

    @Field(() => [countriesCreateManyInput], {nullable:false})
    @Type(() => countriesCreateManyInput)
    data!: Array<countriesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
