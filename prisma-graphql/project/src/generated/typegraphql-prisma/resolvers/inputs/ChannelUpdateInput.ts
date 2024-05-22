import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdateManyWithoutChannelNestedInput } from "../inputs/PostUpdateManyWithoutChannelNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutChannelsNestedInput } from "../inputs/UserUpdateManyWithoutChannelsNestedInput";

@TypeGraphQL.InputType("ChannelUpdateInput", {})
export class ChannelUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutChannelNestedInput, {
    nullable: true
  })
  posts?: PostUpdateManyWithoutChannelNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutChannelsNestedInput, {
    nullable: true
  })
  members?: UserUpdateManyWithoutChannelsNestedInput | undefined;
}
