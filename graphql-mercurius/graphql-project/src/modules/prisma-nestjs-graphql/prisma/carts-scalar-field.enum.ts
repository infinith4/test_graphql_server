import { registerEnumType } from '@nestjs/graphql';

export enum CartsScalarFieldEnum {
    id = "id",
    user_id = "user_id",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(CartsScalarFieldEnum, { name: 'CartsScalarFieldEnum', description: undefined })
