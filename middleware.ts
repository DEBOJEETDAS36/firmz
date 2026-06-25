// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/lib/session";
import { cookies } from "next/headers";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const session = await getIronSession<SessionData>(
    req.cookies as any,
    sessionOptions
  );

  const isDashboard = req.nextUrl.pathname.startsWith("/admin/dashboard");

  if (isDashboard && !session.isAdmin) {
    const loginUrl = new URL("/admin/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return res;
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};