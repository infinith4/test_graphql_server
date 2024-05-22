import { registerEnumType } from '@nestjs/graphql';

export enum CustomersScalarFieldEnum {
    id = "id",
    user_id = "user_id",
    address = "address",
    phone = "phone",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(CustomersScalarFieldEnum, { name: 'CustomersScalarFieldEnum', description: undefined })
