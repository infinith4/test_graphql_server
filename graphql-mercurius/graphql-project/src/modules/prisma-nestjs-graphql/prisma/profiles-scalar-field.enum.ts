import { registerEnumType } from '@nestjs/graphql';

export enum ProfilesScalarFieldEnum {
    id = "id",
    user_id = "user_id",
    bio = "bio",
    website = "website",
    email = "email",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(ProfilesScalarFieldEnum, { name: 'ProfilesScalarFieldEnum', description: undefined })
