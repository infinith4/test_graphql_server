import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChannelUpdateWithoutMembersInput } from "../inputs/ChannelUpdateWithoutMembersInput";
import { ChannelWhereUniqueInput } from "../inputs/ChannelWhereUniqueInput";

@TypeGraphQL.InputType("ChannelUpdateWithWhereUniqueWithoutMembersInput", {})
export class ChannelUpdateWithWhereUniqueWithoutMembersInput {
  @TypeGraphQL.Field(_type => ChannelWhereUniqueInput, {
    nullable: false
  })
  where!: ChannelWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChannelUpdateWithoutMembersInput, {
    nullable: false
  })
  data!: ChannelUpdateWithoutMembersInput;
}
