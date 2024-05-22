import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChannelAvgOrderByAggregateInput } from "../inputs/ChannelAvgOrderByAggregateInput";
import { ChannelCountOrderByAggregateInput } from "../inputs/ChannelCountOrderByAggregateInput";
import { ChannelMaxOrderByAggregateInput } from "../inputs/ChannelMaxOrderByAggregateInput";
import { ChannelMinOrderByAggregateInput } from "../inputs/ChannelMinOrderByAggregateInput";
import { ChannelSumOrderByAggregateInput } from "../inputs/ChannelSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ChannelOrderByWithAggregationInput", {})
export class ChannelOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => ChannelCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ChannelCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChannelAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ChannelAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChannelMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ChannelMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChannelMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ChannelMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChannelSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ChannelSumOrderByAggregateInput | undefined;
}
