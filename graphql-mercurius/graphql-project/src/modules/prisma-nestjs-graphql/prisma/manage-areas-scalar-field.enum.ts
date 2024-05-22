import { registerEnumType } from '@nestjs/graphql';

export enum Manage_areasScalarFieldEnum {
    area_id = "area_id",
    employee_id = "employee_id",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(Manage_areasScalarFieldEnum, { name: 'Manage_areasScalarFieldEnum', description: undefined })
