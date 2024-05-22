import { registerEnumType } from '@nestjs/graphql';

export enum Payment_transactionsScalarFieldEnum {
    id = "id",
    order_id = "order_id",
    amount = "amount",
    status = "status",
    payment_method = "payment_method",
    transaction_id = "transaction_id",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(Payment_transactionsScalarFieldEnum, { name: 'Payment_transactionsScalarFieldEnum', description: undefined })
