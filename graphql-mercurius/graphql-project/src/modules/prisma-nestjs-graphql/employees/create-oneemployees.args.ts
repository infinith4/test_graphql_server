import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { employeesCreateInput } from './employees-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneemployeesArgs {

    @Field(() => employeesCreateInput, {nullable:false})
    @Type(() => employeesCreateInput)
    data!: employeesCreateInput;
}
