import { rest } from "msw";
import { User } from "../common/types/User";
import { login } from "./mockApi/login";
import { getUser, getUsers } from "./mockApi/user/index";

export const handlers = [
  /**
   * Login
   */
  rest.post("/login", login),

  /**
   * User
   */
  rest.get("/users", getUsers),
  rest.get("/user/:userId", getUser),

  /**
   * Tutorial
   */
  rest.get("/user", (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem("is-authenticated");

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        username: "Taro",
        age: 30,
        role: "admin",
      } as User)
    );
  }),
];
