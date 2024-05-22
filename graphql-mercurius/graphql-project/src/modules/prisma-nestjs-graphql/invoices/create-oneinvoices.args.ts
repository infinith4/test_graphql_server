import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { invoicesCreateInput } from './invoices-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneinvoicesArgs {

    @Field(() => invoicesCreateInput, {nullable:false})
    @Type(() => invoicesCreateInput)
    data!: invoicesCreateInput;
}
