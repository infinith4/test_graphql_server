import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { merchantsScalarWhereInput } from './merchants-scalar-where.input';
import { Type } from 'class-transformer';
import { merchantsUpdateManyMutationInput } from './merchants-update-many-mutation.input';

@InputType()
export class merchantsUpdateManyWithWhereWithoutCountriesInput {

    @Field(() => merchantsScalarWhereInput, {nullable:false})
    @Type(() => merchantsScalarWhereInput)
    where!: merchantsScalarWhereInput;

    @Field(() => merchantsUpdateManyMutationInput, {nullable:false})
    @Type(() => merchantsUpdateManyMutationInput)
    data!: merchantsUpdateManyMutationInput;
}
