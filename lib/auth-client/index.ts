// IMPORTS -
import cookies from "js-cookie";

export const getDefaultHeaders = () => {
  const headers: HeadersInit = {};
  headers.Authorization = `Bearer ${cookies.get("token")}`;
  headers["Content-Type"] = "application/json";

  return headers;
};

export const loginClient = {
  defaultHeaders: getDefaultHeaders(),
};
