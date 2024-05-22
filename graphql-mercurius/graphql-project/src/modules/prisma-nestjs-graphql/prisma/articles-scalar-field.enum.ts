import { registerEnumType } from '@nestjs/graphql';

export enum ArticlesScalarFieldEnum {
    id = "id",
    title = "title",
    content = "content",
    status = "status",
    user_id = "user_id",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(ArticlesScalarFieldEnum, { name: 'ArticlesScalarFieldEnum', description: undefined })
