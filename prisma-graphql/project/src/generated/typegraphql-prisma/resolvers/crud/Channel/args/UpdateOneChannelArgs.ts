import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChannelUpdateInput } from "../../../inputs/ChannelUpdateInput";
import { ChannelWhereUniqueInput } from "../../../inputs/ChannelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneChannelArgs {
  @TypeGraphQL.Field(_type => ChannelUpdateInput, {
    nullable: false
  })
  data!: ChannelUpdateInput;

  @TypeGraphQL.Field(_type => ChannelWhereUniqueInput, {
    nullable: false
  })
  where!: ChannelWhereUniqueInput;
}
