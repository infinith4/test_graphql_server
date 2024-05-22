import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { articles } from '../articles/articles.model';

@ObjectType()
export class article_images {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    url!: string | null;

    @Field(() => Int, {nullable:false})
    article_id!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:true})
    updated_at!: Date | null;

    @Field(() => articles, {nullable:false})
    articles?: articles;
}
