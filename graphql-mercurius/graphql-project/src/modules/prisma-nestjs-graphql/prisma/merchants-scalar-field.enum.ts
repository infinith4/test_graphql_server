import { registerEnumType } from '@nestjs/graphql';

export enum MerchantsScalarFieldEnum {
    id = "id",
    name = "name",
    admin_id = "admin_id",
    country_code = "country_code",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(MerchantsScalarFieldEnum, { name: 'MerchantsScalarFieldEnum', description: undefined })
