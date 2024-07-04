// IMPORTS -
import { NextRequest } from "next/server";
import { authCookie } from "./constants/cookie";
import { DEFAULT_REDIRECT_ROUTE, authRoutes, publicRoutes } from "./routes";

export default function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const isLoggedIn = !!req.cookies.get(authCookie.TOKEN)?.value;

  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_REDIRECT_ROUTE, nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL(authRoutes[0], nextUrl));
  }

  return null;
}

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
