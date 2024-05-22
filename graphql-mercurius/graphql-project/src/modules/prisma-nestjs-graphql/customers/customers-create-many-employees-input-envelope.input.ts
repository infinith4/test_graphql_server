import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersCreateManyEmployeesInput } from './customers-create-many-employees.input';
import { Type } from 'class-transformer';

@InputType()
export class customersCreateManyEmployeesInputEnvelope {

    @Field(() => [customersCreateManyEmployeesInput], {nullable:false})
    @Type(() => customersCreateManyEmployeesInput)
    data!: Array<customersCreateManyEmployeesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
