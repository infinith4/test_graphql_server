import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChannelCreateWithoutPostsInput } from "../inputs/ChannelCreateWithoutPostsInput";
import { ChannelWhereUniqueInput } from "../inputs/ChannelWhereUniqueInput";

@TypeGraphQL.InputType("ChannelCreateOrConnectWithoutPostsInput", {})
export class ChannelCreateOrConnectWithoutPostsInput {
  @TypeGraphQL.Field(_type => ChannelWhereUniqueInput, {
    nullable: false
  })
  where!: ChannelWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChannelCreateWithoutPostsInput, {
    nullable: false
  })
  create!: ChannelCreateWithoutPostsInput;
}
