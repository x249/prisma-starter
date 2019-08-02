import { UserResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { TodoParent } from "./Todo";

export interface UserParent {
  id: string;
  username: string;
  email: string;
  password: string;
  todos?: TodoParent[];
  createdAt?: string;
  updatedAt?: string;
}

export const User: UserResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  username: parent => parent.username,
  email: parent => parent.email,
  password: parent => parent.password,
  todos: parent => parent.todos,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt
};
