import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const sessionToken = req.cookies.get("better-auth.session_token");

  if (!sessionToken) {
    const loginUrl = new URL("/sign-in", req.url);
    loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);
    
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
// #### optional: protect specific routes ####
// const protectedRoutes = ["/dashboard", "/editor", "/admin"];

// const isProtected = protectedRoutes.some((route) =>
//   req.nextUrl.pathname.startsWith(route)
// );

// if (isProtected && !sessionToken) {
//   return NextResponse.redirect(new URL("/sign-in", req.url));
// }

export const config = {
  matcher: ["/dashboard/:path*"],
  // ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
};