import { registerEnumType } from '@nestjs/graphql';

export enum AreasScalarFieldEnum {
    id = "id",
    name = "name",
    employee_id = "employee_id"
}


registerEnumType(AreasScalarFieldEnum, { name: 'AreasScalarFieldEnum', description: undefined })
