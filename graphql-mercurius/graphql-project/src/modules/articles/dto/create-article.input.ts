import { InputType, Int, Field } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ArticleStatus } from '../entities/articles-status.enum';
import { users } from '../../users/entities/user.entity';
import { Type } from 'class-transformer';
import {usersCreateNestedOneWithoutArticlesInput} from '../../users/dto/users-create-nested-one-without-articles.input'

@InputType()
export class CreateArticleInput {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // exampleField: number;

  @Field(() => String, {nullable:false})
  title!: string;

  @Field(() => String, {nullable:false})
  content!: string;

  @Field(() => ArticleStatus, {nullable:true})
  status?: keyof typeof ArticleStatus;

  @Field(() => Date, {nullable:true})
  created_at?: Date | string;

  @Field(() => Date, {nullable:true})
  updated_at?: Date | string;

  @Field(() => usersCreateNestedOneWithoutArticlesInput, {nullable:true})
  @Type(() => usersCreateNestedOneWithoutArticlesInput)
  users?: usersCreateNestedOneWithoutArticlesInput;
}
