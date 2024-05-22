import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChannelWhereInput } from "../inputs/ChannelWhereInput";

@TypeGraphQL.InputType("ChannelRelationFilter", {})
export class ChannelRelationFilter {
  @TypeGraphQL.Field(_type => ChannelWhereInput, {
    nullable: true
  })
  is?: ChannelWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChannelWhereInput, {
    nullable: true
  })
  isNot?: ChannelWhereInput | undefined;
}
