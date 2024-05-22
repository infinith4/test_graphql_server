import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ArticlesCount {

    @Field(() => Int, {nullable:false})
    article_images!: number;
}
