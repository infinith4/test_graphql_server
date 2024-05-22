import { registerEnumType } from '@nestjs/graphql';

export enum Order_itemsScalarFieldEnum {
    order_id = "order_id",
    product_id = "product_id",
    quantity = "quantity",
    price = "price",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(Order_itemsScalarFieldEnum, { name: 'Order_itemsScalarFieldEnum', description: undefined })
