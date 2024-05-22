import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyChannelInputEnvelope } from "../inputs/PostCreateManyChannelInputEnvelope";
import { PostCreateOrConnectWithoutChannelInput } from "../inputs/PostCreateOrConnectWithoutChannelInput";
import { PostCreateWithoutChannelInput } from "../inputs/PostCreateWithoutChannelInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutChannelInput } from "../inputs/PostUpdateManyWithWhereWithoutChannelInput";
import { PostUpdateWithWhereUniqueWithoutChannelInput } from "../inputs/PostUpdateWithWhereUniqueWithoutChannelInput";
import { PostUpsertWithWhereUniqueWithoutChannelInput } from "../inputs/PostUpsertWithWhereUniqueWithoutChannelInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateManyWithoutChannelNestedInput", {})
export class PostUpdateManyWithoutChannelNestedInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutChannelInput], {
    nullable: true
  })
  create?: PostCreateWithoutChannelInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutChannelInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutChannelInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutChannelInput], {
    nullable: true
  })
  upsert?: PostUpsertWithWhereUniqueWithoutChannelInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyChannelInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyChannelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  set?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  delete?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutChannelInput], {
    nullable: true
  })
  update?: PostUpdateWithWhereUniqueWithoutChannelInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutChannelInput], {
    nullable: true
  })
  updateMany?: PostUpdateManyWithWhereWithoutChannelInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}
