import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChannelCountMembersArgs } from "./args/ChannelCountMembersArgs";
import { ChannelCountPostsArgs } from "./args/ChannelCountPostsArgs";

@TypeGraphQL.ObjectType("ChannelCount", {})
export class ChannelCount {
  posts!: number;
  members!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "posts",
    nullable: false
  })
  getPosts(@TypeGraphQL.Root() root: ChannelCount, @TypeGraphQL.Args() args: ChannelCountPostsArgs): number {
    return root.posts;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "members",
    nullable: false
  })
  getMembers(@TypeGraphQL.Root() root: ChannelCount, @TypeGraphQL.Args() args: ChannelCountMembersArgs): number {
    return root.members;
  }
}
