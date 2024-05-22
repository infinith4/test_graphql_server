import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersScalarWhereInput } from './customers-scalar-where.input';
import { Type } from 'class-transformer';
import { customersUpdateManyMutationInput } from './customers-update-many-mutation.input';

@InputType()
export class customersUpdateManyWithWhereWithoutEmployeesInput {

    @Field(() => customersScalarWhereInput, {nullable:false})
    @Type(() => customersScalarWhereInput)
    where!: customersScalarWhereInput;

    @Field(() => customersUpdateManyMutationInput, {nullable:false})
    @Type(() => customersUpdateManyMutationInput)
    data!: customersUpdateManyMutationInput;
}
