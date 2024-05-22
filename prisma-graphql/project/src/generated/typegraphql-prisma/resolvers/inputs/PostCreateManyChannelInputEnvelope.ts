import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyChannelInput } from "../inputs/PostCreateManyChannelInput";

@TypeGraphQL.InputType("PostCreateManyChannelInputEnvelope", {})
export class PostCreateManyChannelInputEnvelope {
  @TypeGraphQL.Field(_type => [PostCreateManyChannelInput], {
    nullable: false
  })
  data!: PostCreateManyChannelInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
