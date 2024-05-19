import { registerEnumType } from '@nestjs/graphql';

export enum products_status {
    active = "active",
    inactive = "inactive",
    deleted = "deleted",
    out_of_stock = "out_of_stock",
    in_stock = "in_stock",
    running_low = "running_low"
}


registerEnumType(products_status, { name: 'products_status', description: undefined })
