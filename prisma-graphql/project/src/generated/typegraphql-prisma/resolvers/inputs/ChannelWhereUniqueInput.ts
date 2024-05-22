import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChannelWhereInput } from "../inputs/ChannelWhereInput";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";

@TypeGraphQL.InputType("ChannelWhereUniqueInput", {})
export class ChannelWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [ChannelWhereInput], {
    nullable: true
  })
  AND?: ChannelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChannelWhereInput], {
    nullable: true
  })
  OR?: ChannelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChannelWhereInput], {
    nullable: true
  })
  NOT?: ChannelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => PostListRelationFilter, {
    nullable: true
  })
  posts?: PostListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  members?: UserListRelationFilter | undefined;
}
