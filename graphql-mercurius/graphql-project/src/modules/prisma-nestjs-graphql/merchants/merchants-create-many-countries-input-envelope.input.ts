import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { merchantsCreateManyCountriesInput } from './merchants-create-many-countries.input';
import { Type } from 'class-transformer';

@InputType()
export class merchantsCreateManyCountriesInputEnvelope {

    @Field(() => [merchantsCreateManyCountriesInput], {nullable:false})
    @Type(() => merchantsCreateManyCountriesInput)
    data!: Array<merchantsCreateManyCountriesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
