import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { employeesCreateManyInput } from './employees-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyemployeesArgs {

    @Field(() => [employeesCreateManyInput], {nullable:false})
    @Type(() => employeesCreateManyInput)
    data!: Array<employeesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
