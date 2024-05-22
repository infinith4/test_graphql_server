import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PostWhereInput } from './post-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';

@InputType()
export class PostWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [PostWhereInput], {nullable:true})
    AND?: Array<PostWhereInput>;

    @Field(() => [PostWhereInput], {nullable:true})
    OR?: Array<PostWhereInput>;

    @Field(() => [PostWhereInput], {nullable:true})
    NOT?: Array<PostWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    published?: BoolNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    authorId?: IntNullableFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    author?: UserNullableRelationFilter;
}
