import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChannelWhereInput } from "../../inputs/ChannelWhereInput";

@TypeGraphQL.ArgsType()
export class UserCountChannelsArgs {
  @TypeGraphQL.Field(_type => ChannelWhereInput, {
    nullable: true
  })
  where?: ChannelWhereInput | undefined;
}
