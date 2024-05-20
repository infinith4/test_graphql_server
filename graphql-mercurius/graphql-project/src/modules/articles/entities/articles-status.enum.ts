import { registerEnumType } from '@nestjs/graphql';

export enum ArticleStatus {
    draft = "draft",
    published = "published",
    'private' = "private",
    deleted = "deleted"
}


registerEnumType(ArticleStatus, { name: 'ArticleStatus', description: undefined })
