import { registerEnumType } from '@nestjs/graphql';

export enum Merchant_imagesScalarFieldEnum {
    id = "id",
    url = "url",
    merchant_id = "merchant_id",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(Merchant_imagesScalarFieldEnum, { name: 'Merchant_imagesScalarFieldEnum', description: undefined })
