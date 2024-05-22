import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoicesCreateManyCustomersInput } from './invoices-create-many-customers.input';
import { Type } from 'class-transformer';

@InputType()
export class invoicesCreateManyCustomersInputEnvelope {

    @Field(() => [invoicesCreateManyCustomersInput], {nullable:false})
    @Type(() => invoicesCreateManyCustomersInput)
    data!: Array<invoicesCreateManyCustomersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
