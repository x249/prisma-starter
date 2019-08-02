import { ITypeMap } from "../../generated/resolvers";

import { QueryParent } from "../Query";
import { MutationParent } from "../Mutation";
import { AuthPayloadParent } from "../AuthPayload";
import { MutationResultParent } from "../MutationResult";
import { UserParent } from "../User";
import { TodoParent } from "../Todo";

import { Context } from "./Context";

export interface TypeMap extends ITypeMap {
  Context: Context;
  QueryParent: QueryParent;
  MutationParent: MutationParent;
  AuthPayloadParent: AuthPayloadParent;
  MutationResultParent: MutationResultParent;
  UserParent: UserParent;
  TodoParent: TodoParent;
}
