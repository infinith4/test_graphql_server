import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChannelWhereUniqueInput } from "../../../inputs/ChannelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneChannelArgs {
  @TypeGraphQL.Field(_type => ChannelWhereUniqueInput, {
    nullable: false
  })
  where!: ChannelWhereUniqueInput;
}
