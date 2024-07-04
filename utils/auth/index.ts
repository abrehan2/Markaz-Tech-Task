// IMPORTS -
import { config } from "@/config";
import { authCookie } from "@/constants/cookie";
import { setAuthCookieType } from "@/types/login";
import cookies from "js-cookie";

const ONE_HOUR_IN_MS = config.TOKEN_EXPIRE_MS * 24;
const ONE_DAY_IN_MS = config.TOKEN_EXPIRE_MS * 24 * 2;

export const setAuthCookie: setAuthCookieType = (token, refreshToken) => {
  const tokenExpiresDate = new Date(Date.now() + ONE_HOUR_IN_MS);
  const refreshTokenExpiresDate = new Date(Date.now() + ONE_DAY_IN_MS);

  if (token) {
    cookies.set(authCookie.TOKEN, token, {
      expires: tokenExpiresDate,
    });
  }

  if (refreshToken) {
    cookies.set(authCookie.REFRESH_TOKEN, refreshToken, {
      expires: refreshTokenExpiresDate,
    });
  }
};

export const RemoveAuthCookie = () => {
  cookies.remove(authCookie.TOKEN);
  cookies.remove(authCookie.REFRESH_TOKEN);
};
