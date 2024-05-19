import { registerEnumType } from '@nestjs/graphql';

export enum articles_status {
    draft = "draft",
    published = "published",
    'private' = "private",
    deleted = "deleted"
}


registerEnumType(articles_status, { name: 'articles_status', description: undefined })
