import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { invoicesCreateManyInput } from './invoices-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyinvoicesArgs {

    @Field(() => [invoicesCreateManyInput], {nullable:false})
    @Type(() => invoicesCreateManyInput)
    data!: Array<invoicesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
