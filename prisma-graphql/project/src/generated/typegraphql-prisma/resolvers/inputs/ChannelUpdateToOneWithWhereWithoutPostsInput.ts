import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChannelUpdateWithoutPostsInput } from "../inputs/ChannelUpdateWithoutPostsInput";
import { ChannelWhereInput } from "../inputs/ChannelWhereInput";

@TypeGraphQL.InputType("ChannelUpdateToOneWithWhereWithoutPostsInput", {})
export class ChannelUpdateToOneWithWhereWithoutPostsInput {
  @TypeGraphQL.Field(_type => ChannelWhereInput, {
    nullable: true
  })
  where?: ChannelWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChannelUpdateWithoutPostsInput, {
    nullable: false
  })
  data!: ChannelUpdateWithoutPostsInput;
}
