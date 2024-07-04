// IMPORTS -
import { config } from "@/config";
import axios, { AxiosHeaders } from "axios";
import { loginClient } from "@/lib/auth-client";
import { LoginSchemaType } from "@/schemas/login-schema";
import { login } from "@/types/login";
import { ProfileSchemaType } from "@/schemas/profile-schema";

// PARTIALS -
const loginUrl = config.API_ENDPOINT.concat("/auth/login");
const updateUrl = config.API_ENDPOINT.concat("/users");

// LOGIN -
export const userLogin = async (values: LoginSchemaType) => {
  const data: login = await axios.post(loginUrl, values, {
    headers: loginClient.defaultHeaders,
  });

  return data;
};

// UPDATE USER -
export const updateUser = async ({
  id,
  values,
}: {
  id: string;
  values: ProfileSchemaType;
}) => {
  const data = await axios.put(`${updateUrl}/${id}`, values, {
    headers: loginClient.defaultHeaders,
  });

  return data;
};
