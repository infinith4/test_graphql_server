import { registerEnumType } from '@nestjs/graphql';

export enum Cart_itemsScalarFieldEnum {
    id = "id",
    cart_id = "cart_id",
    product_id = "product_id",
    quantity = "quantity",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(Cart_itemsScalarFieldEnum, { name: 'Cart_itemsScalarFieldEnum', description: undefined })
