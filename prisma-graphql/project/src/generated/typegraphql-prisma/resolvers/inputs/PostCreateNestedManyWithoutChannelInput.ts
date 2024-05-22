import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyChannelInputEnvelope } from "../inputs/PostCreateManyChannelInputEnvelope";
import { PostCreateOrConnectWithoutChannelInput } from "../inputs/PostCreateOrConnectWithoutChannelInput";
import { PostCreateWithoutChannelInput } from "../inputs/PostCreateWithoutChannelInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedManyWithoutChannelInput", {})
export class PostCreateNestedManyWithoutChannelInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutChannelInput], {
    nullable: true
  })
  create?: PostCreateWithoutChannelInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutChannelInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutChannelInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyChannelInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyChannelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}
