import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { invoicesUpdateManyMutationInput } from './invoices-update-many-mutation.input';
import { Type } from 'class-transformer';
import { invoicesWhereInput } from './invoices-where.input';

@ArgsType()
export class UpdateManyinvoicesArgs {

    @Field(() => invoicesUpdateManyMutationInput, {nullable:false})
    @Type(() => invoicesUpdateManyMutationInput)
    data!: invoicesUpdateManyMutationInput;

    @Field(() => invoicesWhereInput, {nullable:true})
    @Type(() => invoicesWhereInput)
    where?: invoicesWhereInput;
}
