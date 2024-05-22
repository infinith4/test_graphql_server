import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ChannelScalarWhereWithAggregatesInput", {})
export class ChannelScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ChannelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ChannelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChannelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ChannelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChannelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ChannelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  description?: StringNullableWithAggregatesFilter | undefined;
}
