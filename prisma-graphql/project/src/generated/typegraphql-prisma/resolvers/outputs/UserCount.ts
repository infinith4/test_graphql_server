import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountChannelsArgs } from "./args/UserCountChannelsArgs";
import { UserCountPostsArgs } from "./args/UserCountPostsArgs";

@TypeGraphQL.ObjectType("UserCount", {})
export class UserCount {
  channels!: number;
  posts!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "channels",
    nullable: false
  })
  getChannels(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountChannelsArgs): number {
    return root.channels;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "posts",
    nullable: false
  })
  getPosts(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountPostsArgs): number {
    return root.posts;
  }
}
