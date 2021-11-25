import {
  DefaultRequestBody,
  ResponseResolver,
  RestContext,
  RestRequest,
} from "msw";
import { JsonPlaceholderUser } from "../../../common/types/User";
import { mockUsers } from "./mockData";

export const getUsers: ResponseResolver<
  RestRequest<DefaultRequestBody, any>,
  RestContext
> = (req, res, ctx) => {
  return res(ctx.json(mockUsers));
};

export const getUser: ResponseResolver<
  RestRequest<DefaultRequestBody, { userId: string }>,
  RestContext
> = (req, res, ctx) => {
  const userId = req.params.userId;
  const user: JsonPlaceholderUser = {
    id: Number(userId),
    name: "Dummy Yamada",
    username: "Hoge",
    email: "hoge@gmail",
  };

  return res(ctx.json(user));
};
