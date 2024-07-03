// IMPORTS -
import { config } from "@/config";
import { authCookie } from "@/constants/cookie";
import { setAuthCookieType } from "@/types/login";
import cookies from "js-cookie";

const ONE_HOUR_IN_MS = config.TOKEN_EXPIRE_MS;

export const setAuthCookie: setAuthCookieType = (token) => {
  const tokenExpiresDate = new Date(Date.now() + ONE_HOUR_IN_MS);

  if (token) {
    cookies.set(authCookie.TOKEN, token, {
      expires: tokenExpiresDate,
    });
  }
};

export const RemoveAuthCookie = () => {
  cookies.remove(authCookie.TOKEN);
};
