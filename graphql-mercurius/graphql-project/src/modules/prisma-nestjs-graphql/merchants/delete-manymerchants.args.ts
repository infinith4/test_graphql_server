import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { merchantsWhereInput } from './merchants-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymerchantsArgs {

    @Field(() => merchantsWhereInput, {nullable:true})
    @Type(() => merchantsWhereInput)
    where?: merchantsWhereInput;
}
