import { registerEnumType } from '@nestjs/graphql';

export enum ProductStatus {
    active = "active",
    inactive = "inactive",
    deleted = "deleted",
    out_of_stock = "out_of_stock",
    in_stock = "in_stock",
    running_low = "running_low"
}


registerEnumType(ProductStatus, { name: 'products_status', description: undefined })
