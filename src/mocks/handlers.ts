import { rest } from "msw";
import { User } from "../common/types/User";
import { getUser, getUsers } from "./mockApi/User/index";

export const handlers = [
  rest.get("/users", getUsers),

  rest.get("/user/:userId", getUser),

  rest.post("/login", (req, res, ctx) => {
    sessionStorage.setItem("is-authenticated", "true");

    return res(ctx.status(200));
  }),

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
