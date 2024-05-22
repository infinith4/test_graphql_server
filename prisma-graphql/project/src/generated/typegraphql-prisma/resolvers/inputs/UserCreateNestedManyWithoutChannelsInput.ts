import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutChannelsInput } from "../inputs/UserCreateOrConnectWithoutChannelsInput";
import { UserCreateWithoutChannelsInput } from "../inputs/UserCreateWithoutChannelsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutChannelsInput", {})
export class UserCreateNestedManyWithoutChannelsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutChannelsInput], {
    nullable: true
  })
  create?: UserCreateWithoutChannelsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutChannelsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutChannelsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
