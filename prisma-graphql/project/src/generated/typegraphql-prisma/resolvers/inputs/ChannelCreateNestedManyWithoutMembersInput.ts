import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChannelCreateOrConnectWithoutMembersInput } from "../inputs/ChannelCreateOrConnectWithoutMembersInput";
import { ChannelCreateWithoutMembersInput } from "../inputs/ChannelCreateWithoutMembersInput";
import { ChannelWhereUniqueInput } from "../inputs/ChannelWhereUniqueInput";

@TypeGraphQL.InputType("ChannelCreateNestedManyWithoutMembersInput", {})
export class ChannelCreateNestedManyWithoutMembersInput {
  @TypeGraphQL.Field(_type => [ChannelCreateWithoutMembersInput], {
    nullable: true
  })
  create?: ChannelCreateWithoutMembersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChannelCreateOrConnectWithoutMembersInput], {
    nullable: true
  })
  connectOrCreate?: ChannelCreateOrConnectWithoutMembersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChannelWhereUniqueInput], {
    nullable: true
  })
  connect?: ChannelWhereUniqueInput[] | undefined;
}
