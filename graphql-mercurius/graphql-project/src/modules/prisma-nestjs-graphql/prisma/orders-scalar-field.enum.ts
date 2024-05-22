import { registerEnumType } from '@nestjs/graphql';

export enum OrdersScalarFieldEnum {
    id = "id",
    user_id = "user_id",
    status = "status",
    total = "total",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(OrdersScalarFieldEnum, { name: 'OrdersScalarFieldEnum', description: undefined })
