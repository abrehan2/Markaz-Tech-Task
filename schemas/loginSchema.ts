// IMPORTS -
import * as z from "zod";

export enum LoginSchemaKeys {
  USERNAME = "username",
  PASSWORD = "password",
}

export const loginSchema = z.object({
  [LoginSchemaKeys.USERNAME]: z.string().trim(),

  [LoginSchemaKeys.PASSWORD]: z.string().trim(),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
