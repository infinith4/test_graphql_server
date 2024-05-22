import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChannelScalarWhereInput } from "../inputs/ChannelScalarWhereInput";
import { ChannelUpdateManyMutationInput } from "../inputs/ChannelUpdateManyMutationInput";

@TypeGraphQL.InputType("ChannelUpdateManyWithWhereWithoutMembersInput", {})
export class ChannelUpdateManyWithWhereWithoutMembersInput {
  @TypeGraphQL.Field(_type => ChannelScalarWhereInput, {
    nullable: false
  })
  where!: ChannelScalarWhereInput;

  @TypeGraphQL.Field(_type => ChannelUpdateManyMutationInput, {
    nullable: false
  })
  data!: ChannelUpdateManyMutationInput;
}
