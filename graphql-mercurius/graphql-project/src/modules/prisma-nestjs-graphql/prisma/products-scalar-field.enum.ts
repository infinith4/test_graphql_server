import { registerEnumType } from '@nestjs/graphql';

export enum ProductsScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    status = "status",
    price = "price",
    stock = "stock",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(ProductsScalarFieldEnum, { name: 'ProductsScalarFieldEnum', description: undefined })
