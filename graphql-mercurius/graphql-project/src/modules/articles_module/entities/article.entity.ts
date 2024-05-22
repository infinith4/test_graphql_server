import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ArticleStatus } from './articles-status.enum';
import { Int } from '@nestjs/graphql';
import { users } from '../../users_module/entities/user.entity';

@ObjectType()
export class Article {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => ArticleStatus, {nullable:true})
    status!: keyof typeof ArticleStatus | null;

    @Field(() => Int, {nullable:true})
    user_id!: number | null;

    @Field(() => Date, {nullable:true})
    created_at!: Date | null;

    @Field(() => Date, {nullable:true})
    updated_at!: Date | null;

    @Field(() => users, {nullable:true})
    users?: users | null;
}
