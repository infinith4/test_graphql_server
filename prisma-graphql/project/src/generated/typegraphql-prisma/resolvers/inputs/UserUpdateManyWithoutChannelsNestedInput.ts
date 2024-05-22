import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutChannelsInput } from "../inputs/UserCreateOrConnectWithoutChannelsInput";
import { UserCreateWithoutChannelsInput } from "../inputs/UserCreateWithoutChannelsInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutChannelsInput } from "../inputs/UserUpdateManyWithWhereWithoutChannelsInput";
import { UserUpdateWithWhereUniqueWithoutChannelsInput } from "../inputs/UserUpdateWithWhereUniqueWithoutChannelsInput";
import { UserUpsertWithWhereUniqueWithoutChannelsInput } from "../inputs/UserUpsertWithWhereUniqueWithoutChannelsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutChannelsNestedInput", {})
export class UserUpdateManyWithoutChannelsNestedInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutChannelsInput], {
    nullable: true
  })
  create?: UserCreateWithoutChannelsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutChannelsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutChannelsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutChannelsInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutChannelsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutChannelsInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutChannelsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutChannelsInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutChannelsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
