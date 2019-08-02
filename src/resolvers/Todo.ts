import { TodoResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export type CATEGORY = "HOME" | "WORK" | "DEVELOPMENT" | "RESEARCH" | "LIFE";

export interface TodoParent {
  id: string;
  text: string;
  category: CATEGORY;
  createdAt?: string;
  updatedAt?: string;
}

export const Todo: TodoResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  text: parent => parent.text,
  category: parent => parent.category,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt
};
