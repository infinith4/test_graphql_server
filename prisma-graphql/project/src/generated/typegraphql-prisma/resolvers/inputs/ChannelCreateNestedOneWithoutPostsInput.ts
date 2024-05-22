import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChannelCreateOrConnectWithoutPostsInput } from "../inputs/ChannelCreateOrConnectWithoutPostsInput";
import { ChannelCreateWithoutPostsInput } from "../inputs/ChannelCreateWithoutPostsInput";
import { ChannelWhereUniqueInput } from "../inputs/ChannelWhereUniqueInput";

@TypeGraphQL.InputType("ChannelCreateNestedOneWithoutPostsInput", {})
export class ChannelCreateNestedOneWithoutPostsInput {
  @TypeGraphQL.Field(_type => ChannelCreateWithoutPostsInput, {
    nullable: true
  })
  create?: ChannelCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => ChannelCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: ChannelCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => ChannelWhereUniqueInput, {
    nullable: true
  })
  connect?: ChannelWhereUniqueInput | undefined;
}
