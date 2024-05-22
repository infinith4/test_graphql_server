import { registerEnumType } from '@nestjs/graphql';

export enum InvoicesScalarFieldEnum {
    id = "id",
    customer_id = "customer_id",
    invoice_date = "invoice_date",
    billing_address = "billing_address",
    billing_city = "billing_city",
    billing_state = "billing_state",
    billing_country_code = "billing_country_code",
    billing_postal_code = "billing_postal_code",
    total = "total",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(InvoicesScalarFieldEnum, { name: 'InvoicesScalarFieldEnum', description: undefined })
