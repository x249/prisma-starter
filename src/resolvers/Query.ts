import { QueryResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface QueryParent {}

export const Query: QueryResolvers.Type<TypeMap> = {
	todos: async (parent, args, { db }, info) => {
		return await db.todoes({ orderBy: "createdAt_DESC" });
	},
	userTodos: async (parent, { username }, { db }, info) => {
		return await db.todoes({ where: { user: { username } } });
	}
};
