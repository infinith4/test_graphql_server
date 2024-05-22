import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedManyWithoutChannelInput } from "../inputs/PostCreateNestedManyWithoutChannelInput";

@TypeGraphQL.InputType("ChannelCreateWithoutMembersInput", {})
export class ChannelCreateWithoutMembersInput {
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
}
