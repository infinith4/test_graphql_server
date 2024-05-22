import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChannelWhereInput } from "../inputs/ChannelWhereInput";

@TypeGraphQL.InputType("ChannelListRelationFilter", {})
export class ChannelListRelationFilter {
  @TypeGraphQL.Field(_type => ChannelWhereInput, {
    nullable: true
  })
  every?: ChannelWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChannelWhereInput, {
    nullable: true
  })
  some?: ChannelWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChannelWhereInput, {
    nullable: true
  })
  none?: ChannelWhereInput | undefined;
}
