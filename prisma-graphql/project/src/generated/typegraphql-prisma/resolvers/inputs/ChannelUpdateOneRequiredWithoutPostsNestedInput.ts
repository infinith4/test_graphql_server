import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChannelCreateOrConnectWithoutPostsInput } from "../inputs/ChannelCreateOrConnectWithoutPostsInput";
import { ChannelCreateWithoutPostsInput } from "../inputs/ChannelCreateWithoutPostsInput";
import { ChannelUpdateToOneWithWhereWithoutPostsInput } from "../inputs/ChannelUpdateToOneWithWhereWithoutPostsInput";
import { ChannelUpsertWithoutPostsInput } from "../inputs/ChannelUpsertWithoutPostsInput";
import { ChannelWhereUniqueInput } from "../inputs/ChannelWhereUniqueInput";

@TypeGraphQL.InputType("ChannelUpdateOneRequiredWithoutPostsNestedInput", {})
export class ChannelUpdateOneRequiredWithoutPostsNestedInput {
  @TypeGraphQL.Field(_type => ChannelCreateWithoutPostsInput, {
    nullable: true
  })
  create?: ChannelCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => ChannelCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: ChannelCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => ChannelUpsertWithoutPostsInput, {
    nullable: true
  })
  upsert?: ChannelUpsertWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => ChannelWhereUniqueInput, {
    nullable: true
  })
  connect?: ChannelWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ChannelUpdateToOneWithWhereWithoutPostsInput, {
    nullable: true
  })
  update?: ChannelUpdateToOneWithWhereWithoutPostsInput | undefined;
}
