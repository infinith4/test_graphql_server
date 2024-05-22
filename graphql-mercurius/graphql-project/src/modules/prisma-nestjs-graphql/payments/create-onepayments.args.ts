import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { paymentsCreateInput } from './payments-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepaymentsArgs {

    @Field(() => paymentsCreateInput, {nullable:false})
    @Type(() => paymentsCreateInput)
    data!: paymentsCreateInput;
}
