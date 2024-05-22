import { registerEnumType } from '@nestjs/graphql';

export enum PaymentsScalarFieldEnum {
    id = "id",
    order_id = "order_id",
    amount = "amount",
    payment_method = "payment_method",
    payment_status = "payment_status",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(PaymentsScalarFieldEnum, { name: 'PaymentsScalarFieldEnum', description: undefined })
