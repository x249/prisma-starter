import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { MutationResolvers } from "../generated/resolvers";
import { getUserId } from "../utils";
import { TypeMap } from "./types/TypeMap";

export interface MutationParent { }

export const Mutation: MutationResolvers.Type<TypeMap> = {
  signup: async (parents, { username, email, password }, { db }, info) => {
    const emailExists = await db.user({ email });
    const usernameExists = await db.user({ username });

    if (emailExists) {
      throw new Error("Email Taken");
    }
    if (usernameExists) {
      throw new Error("Username Taken");
    }

    const hashedPassword = await bcrypt.hashSync(password, 10);
    const user = await db.createUser({
      username,
      email,
      password: hashedPassword
    });

    const token = jwt.sign({ userID: user.id }, process.env
      .APP_SECRET as jwt.Secret);

    return {
      user,
      token
    };
  },
  signin: async (_parent, { username, password }, { db }) => {
    const user = await db.user({ username });
    const valid = await bcrypt.compare(password, user ? user.password : "");

    if (!valid || !user) {
      throw new Error("Invalid Credentials");
    }

    const token = jwt.sign({ userId: user.id }, process.env
      .APP_SECRET as jwt.Secret);

    return {
      user,
      token
    };
  }
};
