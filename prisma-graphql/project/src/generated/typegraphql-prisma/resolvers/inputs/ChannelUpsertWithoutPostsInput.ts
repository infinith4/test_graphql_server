import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChannelCreateWithoutPostsInput } from "../inputs/ChannelCreateWithoutPostsInput";
import { ChannelUpdateWithoutPostsInput } from "../inputs/ChannelUpdateWithoutPostsInput";
import { ChannelWhereInput } from "../inputs/ChannelWhereInput";

@TypeGraphQL.InputType("ChannelUpsertWithoutPostsInput", {})
export class ChannelUpsertWithoutPostsInput {
  @TypeGraphQL.Field(_type => ChannelUpdateWithoutPostsInput, {
    nullable: false
  })
  update!: ChannelUpdateWithoutPostsInput;

  @TypeGraphQL.Field(_type => ChannelCreateWithoutPostsInput, {
    nullable: false
  })
  create!: ChannelCreateWithoutPostsInput;

  @TypeGraphQL.Field(_type => ChannelWhereInput, {
    nullable: true
  })
  where?: ChannelWhereInput | undefined;
}
