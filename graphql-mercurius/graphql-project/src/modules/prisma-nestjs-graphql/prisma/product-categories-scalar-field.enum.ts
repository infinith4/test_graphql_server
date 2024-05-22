import { registerEnumType } from '@nestjs/graphql';

export enum Product_categoriesScalarFieldEnum {
    product_id = "product_id",
    category_id = "category_id"
}


registerEnumType(Product_categoriesScalarFieldEnum, { name: 'Product_categoriesScalarFieldEnum', description: undefined })
