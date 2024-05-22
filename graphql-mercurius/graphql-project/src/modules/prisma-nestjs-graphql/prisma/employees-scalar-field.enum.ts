import { registerEnumType } from '@nestjs/graphql';

export enum EmployeesScalarFieldEnum {
    id = "id",
    first_name = "first_name",
    last_name = "last_name",
    title = "title",
    birth_date = "birth_date",
    hire_date = "hire_date",
    address = "address",
    city = "city",
    state = "state",
    country_code = "country_code",
    postal_code = "postal_code",
    phone_number = "phone_number",
    email = "email",
    area_id = "area_id",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(EmployeesScalarFieldEnum, { name: 'EmployeesScalarFieldEnum', description: undefined })
