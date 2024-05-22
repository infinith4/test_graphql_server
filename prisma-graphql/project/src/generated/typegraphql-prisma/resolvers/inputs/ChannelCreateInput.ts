import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedManyWithoutChannelInput } from "../inputs/PostCreateNestedManyWithoutChannelInput";
import { UserCreateNestedManyWithoutChannelsInput } from "../inputs/UserCreateNestedManyWithoutChannelsInput";

@TypeGraphQL.InputType("ChannelCreateInput", {})
export class ChannelCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutChannelInput, {
    nullable: true
  })
  posts?: PostCreateNestedManyWithoutChannelInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutChannelsInput, {
    nullable: true
  })
  members?: UserCreateNestedManyWithoutChannelsInput | undefined;
}
