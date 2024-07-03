// IMPORTS -
import * as z from "zod";

export enum ProfileSchemaKeys {
  USERNAME = "username",
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName",
}

export const profileSchema = z.object({
  [ProfileSchemaKeys.USERNAME]: z.string().trim(),
  [ProfileSchemaKeys.FIRST_NAME]: z.string().trim(),
  [ProfileSchemaKeys.LAST_NAME]: z.string().trim(),
});

export type ProfileSchemaType = z.infer<typeof profileSchema>;
