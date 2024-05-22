import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChannelAvgAggregate } from "../outputs/ChannelAvgAggregate";
import { ChannelCountAggregate } from "../outputs/ChannelCountAggregate";
import { ChannelMaxAggregate } from "../outputs/ChannelMaxAggregate";
import { ChannelMinAggregate } from "../outputs/ChannelMinAggregate";
import { ChannelSumAggregate } from "../outputs/ChannelSumAggregate";

@TypeGraphQL.ObjectType("ChannelGroupBy", {})
export class ChannelGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => ChannelCountAggregate, {
    nullable: true
  })
  _count!: ChannelCountAggregate | null;

  @TypeGraphQL.Field(_type => ChannelAvgAggregate, {
    nullable: true
  })
  _avg!: ChannelAvgAggregate | null;

  @TypeGraphQL.Field(_type => ChannelSumAggregate, {
    nullable: true
  })
  _sum!: ChannelSumAggregate | null;

  @TypeGraphQL.Field(_type => ChannelMinAggregate, {
    nullable: true
  })
  _min!: ChannelMinAggregate | null;

  @TypeGraphQL.Field(_type => ChannelMaxAggregate, {
    nullable: true
  })
  _max!: ChannelMaxAggregate | null;
}
