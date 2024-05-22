import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manage_areasCreateManyEmployeesInput } from './manage-areas-create-many-employees.input';
import { Type } from 'class-transformer';

@InputType()
export class manage_areasCreateManyEmployeesInputEnvelope {

    @Field(() => [manage_areasCreateManyEmployeesInput], {nullable:false})
    @Type(() => manage_areasCreateManyEmployeesInput)
    data!: Array<manage_areasCreateManyEmployeesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
