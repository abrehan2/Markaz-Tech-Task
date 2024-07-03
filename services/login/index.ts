// IMPORTS -
import { config } from "@/config";
import axios, { AxiosHeaders } from "axios";
import { loginClient } from "@/lib/auth-client";
import { LoginSchemaType } from "@/schemas/login-schema";
import { login } from "@/types/login";

// PARTIALS -
const loginUrl = config.API_ENDPOINT.concat("/auth/login");
const meUrl = config.API_ENDPOINT.concat("/auth/me");

// LOGIN -
export const userLogin = async (values: LoginSchemaType) => {
  const data: login = await axios.post(loginUrl, values, {
    headers: loginClient.defaultHeaders as AxiosHeaders,
  });

  return data;
};

// CURRENT USER -
// export const getCurrentUser = async () => {
//   const data = await axios.get(meUrl, {
//     headers: loginClient.defaultHeaders as AxiosHeaders,
//   });

//   return data;
// };
