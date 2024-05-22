import { registerEnumType } from '@nestjs/graphql';

export enum Customer_addressesScalarFieldEnum {
    id = "id",
    customer_id = "customer_id",
    address_line1 = "address_line1",
    address_line2 = "address_line2",
    city = "city",
    state = "state",
    postal_code = "postal_code",
    country = "country",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(Customer_addressesScalarFieldEnum, { name: 'Customer_addressesScalarFieldEnum', description: undefined })
