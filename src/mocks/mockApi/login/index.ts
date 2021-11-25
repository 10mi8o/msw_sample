import {
  DefaultRequestBody,
  ResponseResolver,
  RestContext,
  RestRequest,
} from "msw";

export const login: ResponseResolver<
  RestRequest<DefaultRequestBody>,
  RestContext
> = (_, res, ctx) => {
  sessionStorage.setItem("is-authenticated", "true");

  return res(ctx.status(200));
};
