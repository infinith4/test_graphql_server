import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { paymentsScalarWhereInput } from './payments-scalar-where.input';
import { Type } from 'class-transformer';
import { paymentsUpdateManyMutationInput } from './payments-update-many-mutation.input';

@InputType()
export class paymentsUpdateManyWithWhereWithoutOrdersInput {

    @Field(() => paymentsScalarWhereInput, {nullable:false})
    @Type(() => paymentsScalarWhereInput)
    where!: paymentsScalarWhereInput;

    @Field(() => paymentsUpdateManyMutationInput, {nullable:false})
    @Type(() => paymentsUpdateManyMutationInput)
    data!: paymentsUpdateManyMutationInput;
}
