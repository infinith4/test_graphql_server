import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ChannelScalarWhereInput", {})
export class ChannelScalarWhereInput {
  @TypeGraphQL.Field(_type => [ChannelScalarWhereInput], {
    nullable: true
  })
  AND?: ChannelScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChannelScalarWhereInput], {
    nullable: true
  })
  OR?: ChannelScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChannelScalarWhereInput], {
    nullable: true
  })
  NOT?: ChannelScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;
}
