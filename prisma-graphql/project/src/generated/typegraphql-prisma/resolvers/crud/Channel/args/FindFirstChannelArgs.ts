import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChannelOrderByWithRelationInput } from "../../../inputs/ChannelOrderByWithRelationInput";
import { ChannelWhereInput } from "../../../inputs/ChannelWhereInput";
import { ChannelWhereUniqueInput } from "../../../inputs/ChannelWhereUniqueInput";
import { ChannelScalarFieldEnum } from "../../../../enums/ChannelScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstChannelArgs {
  @TypeGraphQL.Field(_type => ChannelWhereInput, {
    nullable: true
  })
  where?: ChannelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ChannelOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ChannelOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ChannelWhereUniqueInput, {
    nullable: true
  })
  cursor?: ChannelWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ChannelScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "title" | "description"> | undefined;
}
