import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { employeesWhereInput } from './employees-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyemployeesArgs {

    @Field(() => employeesWhereInput, {nullable:true})
    @Type(() => employeesWhereInput)
    where?: employeesWhereInput;
}
