import { GraphQLResolveInfo } from "graphql";

export interface ITypeMap {
  Context: any;
  CATEGORY: any;

  QueryParent: any;
  MutationParent: any;
  AuthPayloadParent: any;
  MutationResultParent: any;
  UserParent: any;
  TodoParent: any;
}

export namespace QueryResolvers {
  export type TodosResolver<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["TodoParent"][] | Promise<T["TodoParent"][]>;

  export interface ArgsUserTodos {
    username: string;
  }

  export type UserTodosResolver<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: ArgsUserTodos,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["TodoParent"][] | Promise<T["TodoParent"][]>;

  export interface Type<T extends ITypeMap> {
    todos: (
      parent: T["QueryParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["TodoParent"][] | Promise<T["TodoParent"][]>;
    userTodos: (
      parent: T["QueryParent"],
      args: ArgsUserTodos,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["TodoParent"][] | Promise<T["TodoParent"][]>;
  }
}

export namespace MutationResolvers {
  export interface ArgsSignup {
    username: string;
    email: string;
    password: string;
  }

  export type SignupResolver<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsSignup,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AuthPayloadParent"] | Promise<T["AuthPayloadParent"]>;

  export interface ArgsSignin {
    username: string;
    password: string;
  }

  export type SigninResolver<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsSignin,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AuthPayloadParent"] | Promise<T["AuthPayloadParent"]>;

  export interface Type<T extends ITypeMap> {
    signup: (
      parent: T["MutationParent"],
      args: ArgsSignup,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AuthPayloadParent"] | Promise<T["AuthPayloadParent"]>;
    signin: (
      parent: T["MutationParent"],
      args: ArgsSignin,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AuthPayloadParent"] | Promise<T["AuthPayloadParent"]>;
  }
}

export namespace AuthPayloadResolvers {
  export type TokenResolver<T extends ITypeMap> = (
    parent: T["AuthPayloadParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UserResolver<T extends ITypeMap> = (
    parent: T["AuthPayloadParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | Promise<T["UserParent"]>;

  export interface Type<T extends ITypeMap> {
    token: (
      parent: T["AuthPayloadParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    user: (
      parent: T["AuthPayloadParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | Promise<T["UserParent"]>;
  }
}

export namespace MutationResultResolvers {
  export type SuccessResolver<T extends ITypeMap> = (
    parent: T["MutationResultParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export interface Type<T extends ITypeMap> {
    success: (
      parent: T["MutationResultParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;
  }
}

export namespace UserResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UsernameResolver<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type EmailResolver<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type PasswordResolver<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type TodosResolver<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["TodoParent"][] | Promise<T["TodoParent"][]>;

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type UpdatedAtResolver<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    username: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    email: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    password: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    todos: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["TodoParent"][] | Promise<T["TodoParent"][]>;
    createdAt: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    updatedAt: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
  }
}

export namespace TodoResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T["TodoParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type TextResolver<T extends ITypeMap> = (
    parent: T["TodoParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CategoryResolver<T extends ITypeMap> = (
    parent: T["TodoParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["CATEGORY"] | Promise<T["CATEGORY"]>;

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T["TodoParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type UpdatedAtResolver<T extends ITypeMap> = (
    parent: T["TodoParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["TodoParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    text: (
      parent: T["TodoParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    category: (
      parent: T["TodoParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["CATEGORY"] | Promise<T["CATEGORY"]>;
    createdAt: (
      parent: T["TodoParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    updatedAt: (
      parent: T["TodoParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
  }
}

export interface IResolvers<T extends ITypeMap> {
  Query: QueryResolvers.Type<T>;
  Mutation: MutationResolvers.Type<T>;
  AuthPayload: AuthPayloadResolvers.Type<T>;
  MutationResult: MutationResultResolvers.Type<T>;
  User: UserResolvers.Type<T>;
  Todo: TodoResolvers.Type<T>;
}
