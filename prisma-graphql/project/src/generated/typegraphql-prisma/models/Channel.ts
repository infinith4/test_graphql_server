import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Post } from "../models/Post";
import { User } from "../models/User";
import { ChannelCount } from "../resolvers/outputs/ChannelCount";

@TypeGraphQL.ObjectType("Channel", {})
export class Channel {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  posts?: Post[];

  members?: User[];

  @TypeGraphQL.Field(_type => ChannelCount, {
    nullable: true
  })
  _count?: ChannelCount | null;
}
