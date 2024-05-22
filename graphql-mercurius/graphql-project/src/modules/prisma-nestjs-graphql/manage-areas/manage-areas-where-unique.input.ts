import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manage_areasArea_idEmployee_idCompoundUniqueInput } from './manage-areas-area-id-employee-id-compound-unique.input';
import { manage_areasWhereInput } from './manage-areas-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EmployeesRelationFilter } from '../prisma/employees-relation-filter.input';
import { AreasRelationFilter } from '../prisma/areas-relation-filter.input';

@InputType()
export class manage_areasWhereUniqueInput {

    @Field(() => manage_areasArea_idEmployee_idCompoundUniqueInput, {nullable:true})
    area_id_employee_id?: manage_areasArea_idEmployee_idCompoundUniqueInput;

    @Field(() => [manage_areasWhereInput], {nullable:true})
    AND?: Array<manage_areasWhereInput>;

    @Field(() => [manage_areasWhereInput], {nullable:true})
    OR?: Array<manage_areasWhereInput>;

    @Field(() => [manage_areasWhereInput], {nullable:true})
    NOT?: Array<manage_areasWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    area_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    employee_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;

    @Field(() => EmployeesRelationFilter, {nullable:true})
    employees?: EmployeesRelationFilter;

    @Field(() => AreasRelationFilter, {nullable:true})
    areas?: AreasRelationFilter;
}
