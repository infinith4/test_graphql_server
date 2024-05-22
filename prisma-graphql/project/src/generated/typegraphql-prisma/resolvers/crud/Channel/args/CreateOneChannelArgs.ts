import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChannelCreateInput } from "../../../inputs/ChannelCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneChannelArgs {
  @TypeGraphQL.Field(_type => ChannelCreateInput, {
    nullable: false
  })
  data!: ChannelCreateInput;
}
