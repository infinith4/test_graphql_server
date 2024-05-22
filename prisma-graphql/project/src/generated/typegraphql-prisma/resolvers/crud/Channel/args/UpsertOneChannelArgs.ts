import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChannelCreateInput } from "../../../inputs/ChannelCreateInput";
import { ChannelUpdateInput } from "../../../inputs/ChannelUpdateInput";
import { ChannelWhereUniqueInput } from "../../../inputs/ChannelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneChannelArgs {
  @TypeGraphQL.Field(_type => ChannelWhereUniqueInput, {
    nullable: false
  })
  where!: ChannelWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChannelCreateInput, {
    nullable: false
  })
  create!: ChannelCreateInput;

  @TypeGraphQL.Field(_type => ChannelUpdateInput, {
    nullable: false
  })
  update!: ChannelUpdateInput;
}
