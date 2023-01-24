import {
  GraphQLInt,
  GraphQLScalarType,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLString,
  GraphQLList,
} from "graphql";

const GraphQLDate = new GraphQLScalarType({
  name: "GraphQLDate",
});

export const postgresToGraphql = {
  _bool: "GraphQLList(GraphQLBoolean)",
  _float4: "GraphQLList(GraphQLFloat)",
  _float8: "GraphQLList(GraphQLFloat)",
  _int2: "GraphQLList(GraphQLInt)",
  _text: "GraphQLList(GraphQLString)",
  bool: "GraphQLBoolean",
  float4: "GraphQLFloat",
  float8: "GraphQLFloat",
  int2: "GraphQLInt",
  int4: "GraphQLInt",
  int8: "GraphQLInt",
  text: "GraphQLString",
  timestamp: "GraphQLDate",
  timestamptz: "GraphQLDate",
} as const;

export const postgresToTS = {
  _bool: "boolean[]",
  _float4: "number[]",
  _float8: "number[]",
  _int2: "number[]",
  _text: "string[]",
  bool: "boolean",
  float4: "number",
  float8: "number",
  int2: "number",
  int4: "number",
  int8: "number",
  text: "string",
  timestamp: "Date",
  timestamptz: "Date",
} as const;
