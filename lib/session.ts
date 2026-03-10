import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import type { Session } from "@/types/auth.type";

export async function getSession(): Promise<Session | null> {
  const headersList = await headers();

  const headerObject = Object.fromEntries(headersList.entries());

  const session = await auth.api.getSession({
    headers: headerObject,
  });

  console.log("Session from getSession:", session);

  return session as Session | null;
}

export async function logout(): Promise<void> {
  const headersList = await headers();

  const headerObject = Object.fromEntries(headersList.entries());

  await auth.api.signOut({
    headers: headerObject,
  });
}