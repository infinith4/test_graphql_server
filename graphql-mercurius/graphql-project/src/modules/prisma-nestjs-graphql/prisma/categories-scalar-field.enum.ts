import { registerEnumType } from '@nestjs/graphql';

export enum CategoriesScalarFieldEnum {
    id = "id",
    name = "name",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(CategoriesScalarFieldEnum, { name: 'CategoriesScalarFieldEnum', description: undefined })
