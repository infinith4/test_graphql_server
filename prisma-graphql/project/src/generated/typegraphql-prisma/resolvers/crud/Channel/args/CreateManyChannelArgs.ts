import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChannelCreateManyInput } from "../../../inputs/ChannelCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyChannelArgs {
  @TypeGraphQL.Field(_type => [ChannelCreateManyInput], {
    nullable: false
  })
  data!: ChannelCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
