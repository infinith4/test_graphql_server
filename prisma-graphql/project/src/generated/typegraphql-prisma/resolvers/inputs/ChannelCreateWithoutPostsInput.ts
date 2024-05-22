import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedManyWithoutChannelsInput } from "../inputs/UserCreateNestedManyWithoutChannelsInput";

@TypeGraphQL.InputType("ChannelCreateWithoutPostsInput", {})
export class ChannelCreateWithoutPostsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutChannelsInput, {
    nullable: true
  })
  members?: UserCreateNestedManyWithoutChannelsInput | undefined;
}
