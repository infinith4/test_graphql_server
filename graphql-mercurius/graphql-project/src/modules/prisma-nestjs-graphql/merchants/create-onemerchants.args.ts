import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { merchantsCreateInput } from './merchants-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemerchantsArgs {

    @Field(() => merchantsCreateInput, {nullable:false})
    @Type(() => merchantsCreateInput)
    data!: merchantsCreateInput;
}
