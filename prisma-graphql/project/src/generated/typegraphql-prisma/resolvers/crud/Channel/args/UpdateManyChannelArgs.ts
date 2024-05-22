import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChannelUpdateManyMutationInput } from "../../../inputs/ChannelUpdateManyMutationInput";
import { ChannelWhereInput } from "../../../inputs/ChannelWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyChannelArgs {
  @TypeGraphQL.Field(_type => ChannelUpdateManyMutationInput, {
    nullable: false
  })
  data!: ChannelUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ChannelWhereInput, {
    nullable: true
  })
  where?: ChannelWhereInput | undefined;
}
