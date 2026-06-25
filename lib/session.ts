// lib/session.ts
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export interface SessionData {
  isAdmin?: boolean;
}

export const sessionOptions = {
  password: process.env.SESSION_SECRET as string,
  cookieName: "admin_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
  },
};

export async function getSession() {
  const session = await getIronSession<SessionData>(
    cookies(),
    sessionOptions
  );
  return session;
}