import { registerEnumType } from '@nestjs/graphql';

export enum orders_status {
    pending = "pending",
    processing = "processing",
    completed = "completed",
    cancelled = "cancelled"
}


registerEnumType(orders_status, { name: 'orders_status', description: undefined })
