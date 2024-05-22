import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { employeesUpdateManyMutationInput } from './employees-update-many-mutation.input';
import { Type } from 'class-transformer';
import { employeesWhereInput } from './employees-where.input';

@ArgsType()
export class UpdateManyemployeesArgs {

    @Field(() => employeesUpdateManyMutationInput, {nullable:false})
    @Type(() => employeesUpdateManyMutationInput)
    data!: employeesUpdateManyMutationInput;

    @Field(() => employeesWhereInput, {nullable:true})
    @Type(() => employeesWhereInput)
    where?: employeesWhereInput;
}
