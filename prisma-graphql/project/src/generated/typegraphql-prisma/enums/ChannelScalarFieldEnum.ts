import * as TypeGraphQL from "type-graphql";

export enum ChannelScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description"
}
TypeGraphQL.registerEnumType(ChannelScalarFieldEnum, {
  name: "ChannelScalarFieldEnum",
  description: undefined,
});
