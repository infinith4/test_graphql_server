import { registerEnumType } from '@nestjs/graphql';

export enum UsersScalarFieldEnum {
    id = "id",
    name = "name",
    username = "username",
    email = "email",
    hashed_password = "hashed_password",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(UsersScalarFieldEnum, { name: 'UsersScalarFieldEnum', description: undefined })
