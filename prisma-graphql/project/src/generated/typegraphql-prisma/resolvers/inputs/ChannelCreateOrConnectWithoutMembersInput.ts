import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChannelCreateWithoutMembersInput } from "../inputs/ChannelCreateWithoutMembersInput";
import { ChannelWhereUniqueInput } from "../inputs/ChannelWhereUniqueInput";

@TypeGraphQL.InputType("ChannelCreateOrConnectWithoutMembersInput", {})
export class ChannelCreateOrConnectWithoutMembersInput {
  @TypeGraphQL.Field(_type => ChannelWhereUniqueInput, {
    nullable: false
  })
  where!: ChannelWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChannelCreateWithoutMembersInput, {
    nullable: false
  })
  create!: ChannelCreateWithoutMembersInput;
}
