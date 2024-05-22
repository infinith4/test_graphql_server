import { registerEnumType } from '@nestjs/graphql';

export enum Article_imagesScalarFieldEnum {
    id = "id",
    url = "url",
    article_id = "article_id",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(Article_imagesScalarFieldEnum, { name: 'Article_imagesScalarFieldEnum', description: undefined })
