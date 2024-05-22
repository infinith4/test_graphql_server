import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutChannelInput } from "../inputs/PostCreateWithoutChannelInput";
import { PostUpdateWithoutChannelInput } from "../inputs/PostUpdateWithoutChannelInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpsertWithWhereUniqueWithoutChannelInput", {})
export class PostUpsertWithWhereUniqueWithoutChannelInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutChannelInput, {
    nullable: false
  })
  update!: PostUpdateWithoutChannelInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutChannelInput, {
    nullable: false
  })
  create!: PostCreateWithoutChannelInput;
}
