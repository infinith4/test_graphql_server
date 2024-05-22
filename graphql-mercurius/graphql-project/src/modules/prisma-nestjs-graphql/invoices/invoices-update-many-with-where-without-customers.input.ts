import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoicesScalarWhereInput } from './invoices-scalar-where.input';
import { Type } from 'class-transformer';
import { invoicesUpdateManyMutationInput } from './invoices-update-many-mutation.input';

@InputType()
export class invoicesUpdateManyWithWhereWithoutCustomersInput {

    @Field(() => invoicesScalarWhereInput, {nullable:false})
    @Type(() => invoicesScalarWhereInput)
    where!: invoicesScalarWhereInput;

    @Field(() => invoicesUpdateManyMutationInput, {nullable:false})
    @Type(() => invoicesUpdateManyMutationInput)
    data!: invoicesUpdateManyMutationInput;
}
