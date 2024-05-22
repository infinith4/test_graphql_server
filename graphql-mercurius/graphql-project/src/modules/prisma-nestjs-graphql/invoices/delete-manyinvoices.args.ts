import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { invoicesWhereInput } from './invoices-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyinvoicesArgs {

    @Field(() => invoicesWhereInput, {nullable:true})
    @Type(() => invoicesWhereInput)
    where?: invoicesWhereInput;
}
