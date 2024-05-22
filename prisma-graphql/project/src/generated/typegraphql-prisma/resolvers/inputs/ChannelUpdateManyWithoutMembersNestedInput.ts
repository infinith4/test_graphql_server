import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChannelCreateOrConnectWithoutMembersInput } from "../inputs/ChannelCreateOrConnectWithoutMembersInput";
import { ChannelCreateWithoutMembersInput } from "../inputs/ChannelCreateWithoutMembersInput";
import { ChannelScalarWhereInput } from "../inputs/ChannelScalarWhereInput";
import { ChannelUpdateManyWithWhereWithoutMembersInput } from "../inputs/ChannelUpdateManyWithWhereWithoutMembersInput";
import { ChannelUpdateWithWhereUniqueWithoutMembersInput } from "../inputs/ChannelUpdateWithWhereUniqueWithoutMembersInput";
import { ChannelUpsertWithWhereUniqueWithoutMembersInput } from "../inputs/ChannelUpsertWithWhereUniqueWithoutMembersInput";
import { ChannelWhereUniqueInput } from "../inputs/ChannelWhereUniqueInput";

@TypeGraphQL.InputType("ChannelUpdateManyWithoutMembersNestedInput", {})
export class ChannelUpdateManyWithoutMembersNestedInput {
  @TypeGraphQL.Field(_type => [ChannelCreateWithoutMembersInput], {
    nullable: true
  })
  create?: ChannelCreateWithoutMembersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChannelCreateOrConnectWithoutMembersInput], {
    nullable: true
  })
  connectOrCreate?: ChannelCreateOrConnectWithoutMembersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChannelUpsertWithWhereUniqueWithoutMembersInput], {
    nullable: true
  })
  upsert?: ChannelUpsertWithWhereUniqueWithoutMembersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChannelWhereUniqueInput], {
    nullable: true
  })
  set?: ChannelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChannelWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ChannelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChannelWhereUniqueInput], {
    nullable: true
  })
  delete?: ChannelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChannelWhereUniqueInput], {
    nullable: true
  })
  connect?: ChannelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChannelUpdateWithWhereUniqueWithoutMembersInput], {
    nullable: true
  })
  update?: ChannelUpdateWithWhereUniqueWithoutMembersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChannelUpdateManyWithWhereWithoutMembersInput], {
    nullable: true
  })
  updateMany?: ChannelUpdateManyWithWhereWithoutMembersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChannelScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ChannelScalarWhereInput[] | undefined;
}
